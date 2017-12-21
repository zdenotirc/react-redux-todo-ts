import { createStore, applyMiddleware } from 'redux'
// Logger with default options
import logger from 'redux-logger'

// We don't have any reducer yet
// We give an empty reducer for now
const store = createStore<any>(() => ({}), applyMiddleware(logger))

export default store