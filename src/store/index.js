import { createStore, combineReducers } from 'redux'
import { tasksReducer, remindersReducer } from './reducers'

const rootReducer = combineReducers({
  tasks: tasksReducer,
  reminders: remindersReducer
})

export default createStore(rootReducer)
