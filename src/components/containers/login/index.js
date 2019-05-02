import { connect } from 'react-redux'
import Login from '../../views/login'
import { login } from '../../../state/actions/AuthorizationActions'

const mapStateToProps = state => {
  return {
    authorization: state.authorization
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)