import { tasksTypes } from '../types'
import { getTasks, insertTask, updateTask, toggleDone as toggleDoneDb, deleteTask } from '../../db'

const { GET_TASKS, ADD_TASK, TOGGLE_DONE, EDIT_TASK, REMOVE_TASK } = tasksTypes

export const fetchTasks = () => {
  return async dispatch => {
    try {
      const tasks = await getTasks()

      dispatch({
        type: GET_TASKS,
        payload: tasks?.rows?._array || []
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const addTask = task => {
  return async dispatch => {
    try {
      const newTask = await insertTask(task)

      dispatch({
        type: ADD_TASK,
        payload: { ...task, id: newTask.insertId }
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const toggleDone = id => {
  return async dispatch => {
    try {
      await toggleDoneDb(id)

      dispatch({
        type: TOGGLE_DONE,
        payload: id
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const editTask = (id, data) => {
  return async dispatch => {
    try {
      await updateTask(id, data)

      dispatch({
        type: EDIT_TASK,
        payload: { id, data }
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const removeTask = id => {
  return async dispatch => {
    try {
      await deleteTask(id)

      dispatch({
        type: REMOVE_TASK,
        payload: id
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}
