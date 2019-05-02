import { connect } from 'react-redux'
import Home from '../../views/home'
import { fetchWeatherByCity, fetchWeatherBylattlong } from '../../../state/actions/WeatherActions'
import { logout } from '../../../state/actions/AuthorizationActions'

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWeatherByCity: city => dispatch(fetchWeatherByCity(city)),
    getWeatherByLattlong: coordinate => dispatch(fetchWeatherBylattlong(coordinate)),
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)