import { FIREBASE_RTDB_URL } from '../../firebase'
import { tasksTypes } from '../types'

const { GET_TASKS, ADD_TASK, TOGGLE_DONE, EDIT_TASK, REMOVE_TASK } = tasksTypes

export const getTasks = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${FIREBASE_RTDB_URL}/tasks.json`)
      const data = await response.json()

      const tasks = data ? Object.keys(data).map(key => ({ ...data[key], id: key })) : []

      dispatch({ type: GET_TASKS, payload: tasks })
    } catch (error) {
      dispatch({ type: GET_TASKS, payload: error })
    }
  }
}

export const addTask = task => {
  return async dispatch => {
    try {
      const response = await fetch(`${FIREBASE_RTDB_URL}/tasks.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
      })

      const data = await response.json()

      dispatch({ type: ADD_TASK, payload: { ...task, id: data.name } })
    } catch (error) {
      dispatch({ type: ADD_TASK, payload: error })
    }
  }
}

export const toggleDone = id => {
  return async dispatch => {
    try {
      const response = await fetch(`${FIREBASE_RTDB_URL}/tasks/${id}.json`)
      const data = await response.json()

      const done = !data.done

      await fetch(`${FIREBASE_RTDB_URL}/tasks/${id}.json`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done })
      })

      dispatch({ type: TOGGLE_DONE, payload: id })
    } catch (error) {
      dispatch({ type: TOGGLE_DONE, payload: error })
    }
  }
}

export const editTask = (id, data) => {
  return async dispatch => {
    try {
      await fetch(`${FIREBASE_RTDB_URL}/tasks/${id}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      dispatch({ type: EDIT_TASK, payload: { id, data } })
    } catch (error) {
      dispatch({ type: EDIT_TASK, payload: error })
    }
  }
}

export const removeTask = id => {
  return async dispatch => {
    try {
      await fetch(`${FIREBASE_RTDB_URL}/tasks/${id}.json`, {
        method: 'DELETE'
      })

      dispatch({ type: REMOVE_TASK, payload: id })
    } catch (error) {
      dispatch({ type: REMOVE_TASK, payload: error })
    }
  }
}
