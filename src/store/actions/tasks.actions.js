import { tasksTypes } from '../types'

const { GET_TASKS, ADD_TASK, TOGGLE_DONE, EDIT_TASK, REMOVE_TASK } = tasksTypes

// Fetch the tasks from device storage or sqlite db
export const getTasks = () => {
  return {
    type: GET_TASKS,
    payload: tasks
  }
}

export const addTask = task => {
  return {
    type: ADD_TASK,
    payload: task
  }
}

export const toggleDone = id => {
  return {
    type: TOGGLE_DONE,
    payload: id
  }
}

export const editTask = (id, data) => {
  return {
    type: EDIT_TASK,
    payload: { id, data }
  }
}

export const removeTask = id => {
  return {
    type: REMOVE_TASK,
    payload: id
  }
}
