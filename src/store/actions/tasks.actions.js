import { tasksTypes } from '../types'

const { ADD_TASK, TOGGLE_DONE, EDIT_TASK, REMOVE_TASK } = tasksTypes

export const addTask = task => ({
  type: ADD_TASK,
  payload: task
})

export const toggleDone = id => ({
  type: TOGGLE_DONE,
  payload: id
})

export const editTask = (id, data) => ({
  type: EDIT_TASK,
  payload: { id, data }
})

export const removeTask = id => ({
  type: REMOVE_TASK,
  payload: id
})
