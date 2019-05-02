import { combineReducers } from 'redux'
import weather from './WeatherReducer'
import authorization from './AuthorizationReducer'

export const appReducer = combineReducers({
  authorization,
  weather
})