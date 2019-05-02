import {
  FETCHING_WEATHER,
  FETCH_WEATHER,
  FAILED_FETCHING_WEATHER,
  FAILED_LOCATION,
  SAVED_LOCATION,
} from '../actions/WeatherActions'

const initialState = {
  fetching: false,
  infos: null,
  location: {
    info: null,
    error: null
  },
  error: null,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SAVED_LOCATION:
      return {
        ...state,
        location: {
          info: action.location,
          error: null
        }
      }

    case FAILED_LOCATION:
      return {
        ...state,
        location: {
          info: null,
          error: action.error
        },
        fetching: false
      }

    case FETCHING_WEATHER:
      return {
        ...state,
        fetching: true,
        error: null
      }

    case FETCH_WEATHER:
      return {
        ...state,
        infos: action.payload,
        fetching: false,
        error: null
      }

    case FAILED_FETCHING_WEATHER:
      return {
        ...state,
        fetching: false,
        error: action.error
      }

    default:
      return state
  }
}

export default reducer