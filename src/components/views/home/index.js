import React from 'react';
import styled from 'styled-components';
import SearchBar from 'material-ui-search-bar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { WeatherImgs } from '../../../utils';

const HomeContainer = styled.div`
  && {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const MainContent = styled.div`
  && {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto 0;
    padding-bottom: 150px;
  }
`

const ButtonContent = styled.div`
  && {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const WeatherStatus = styled.div`
  && {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
`;

const WeatherImg = styled.img`
  && {
    width: 30px;
    margin-right: 10px;
  }
`;

const BoldTypography = styled(Typography)`
  && {
    font-weight: bold;
    margin-top: 10px;
  }
`;

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      error: ''
    }
  }
  
  componentDidMount() {
    const { authorization, history } = this.props
    if(!authorization.isAuthorized) {
      history.push('/login')
      return null
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        this.props.getWeatherByLattlong({ lat: position.coords.latitude, lng: position.coords.longitude })
      },
      () => {
        this.setState({ error: "Can't get the user's coordinate" })
      },
    );
  }

  getWeatherInfoBySearch = () => {
    this.setState({error: ''})
    this.props.getWeatherByCity(this.state.search)
  }

  logout = () => {
    this.props.logout().then(auth => {
      if(!auth.isAuthorized) window.location.href = '/login'
    })
  }

  render() {
    const weather = this.props.weather
    return (
      <HomeContainer>
        <Grid container alignItems="center">
          <Grid item xs={8} md={6}>
            <SearchBar
              value={this.state.search}
              onChange={value => this.setState({search: value})}
              onRequestSearch={this.getWeatherInfoBySearch}
              style={{
                margin: '0 auto',
                maxWidth: 800
              }}
            />
          </Grid>
          <Grid item xs={4} md={6}>
            <ButtonContent>
              <Button onClick={this.logout}>Log out</Button>
            </ButtonContent>
          </Grid>
        </Grid>
        <MainContent>
          { weather.fetching ?
            <CircularProgress size={60}/>
            :
            !weather.error && !weather.location.error && !this.state.error?
              weather.location && weather.infos && 
                <div>
                  <WeatherStatus>
                    <WeatherImg src={WeatherImgs[weather.infos.weather_state_abbr]}/>
                    <Typography variant="body1">{weather.infos.weather_state_name}</Typography>
                  </WeatherStatus>
                  <Typography variant="body1">{`Min: ${weather.infos.min_temp.toFixed(2)}°C`}</Typography>
                  <Typography variant="body1">{`Max: ${weather.infos.max_temp.toFixed(2)}°C`}</Typography>
                  <BoldTypography variant="body1">{weather.location.info && weather.location.info.title}</BoldTypography>
                </div>
              :
              <BoldTypography variant="body1">{this.state.error || weather.location.error || weather.error}</BoldTypography>
          }
        </MainContent>
      </HomeContainer>
    );
  }
}

export default Home;
