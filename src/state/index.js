import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { appReducer } from '../state/reducers'


const middlewares = [
  thunk,
  logger
]

export default createStore(appReducer, {}, applyMiddleware(...middlewares))