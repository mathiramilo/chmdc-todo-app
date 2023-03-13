import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { tasksReducer, remindersReducer } from './reducers'

const rootReducer = combineReducers({
  tasks: tasksReducer,
  reminders: remindersReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))
