import {
  LOG_IN_SUCCESS,
  LOG_IN_FAILED,
  LOG_OUT,
} from '../actions/AuthorizationActions'

const initialState = {
  isAuthorized: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
        error: null
      }

    case LOG_IN_FAILED:
      return {
        ...state,
        isAuthorized: false,
        error: action.error
      }

    case LOG_OUT:
      return {
        ...state,
        isAuthorized: false,
        error: null
      }

    default:
      return state
  }
}

export default reducer