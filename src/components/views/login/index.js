import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const LoginContent = styled.div`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 40px);
  }
`

const InputField = styled(TextField)`
  && {
    min-width: 300px;
    margin: 15px 0 0;
  }
`

const LoginBtn = styled(Button)`
  && {
    min-width: 150px;
    margin: 20px 0;
  }
`

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  login = () => {
    this.props.login({ ...this.state }).then(auth => {
      auth.isAuthorized && this.props.history.push('/')
    })
  }

  render() {
    return (
      <LoginContent>
        <InputField
          label="Email"
          type="text"
          value={this.state.email}
          onChange={e => this.setState({email: e.target.value})}
        />
        <InputField
          label="Password"
          type="password"
          value={this.state.password}
          onChange={e => this.setState({password: e.target.value})}
        />
        <LoginBtn onClick={this.login}>Log in</LoginBtn>
        <Typography variant="caption" color="secondary">
          {this.props.authorization.error}
        </Typography>
      </LoginContent>
    );
  }
}

export default Home;
