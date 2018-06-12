import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux' // we need this for react-router
import appointments from './appointmentReducer'

// Combine all reducers
const rootReducer = combineReducers({
  appointments,
  router
})

export default rootReducer
