import { remindersTypes } from '../types'
import { FIREBASE_RTDB_URL } from '../../firebase'

const { GET_REMINDERS, ADD_REMINDER, TOGGLE_NOTIFICATIONS, EDIT_REMINDER, REMOVE_REMINDER } = remindersTypes

export const getReminders = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${FIREBASE_RTDB_URL}/reminders.json`)
      const data = await response.json()

      const reminders = data ? Object.keys(data).map(key => ({ ...data[key], id: key })) : []

      dispatch({ type: GET_REMINDERS, payload: reminders })
    } catch (error) {
      dispatch({ type: GET_REMINDERS, payload: error })
    }
  }
}

export const addReminder = reminder => {
  return async dispatch => {
    try {
      const response = await fetch(`${FIREBASE_RTDB_URL}/reminders.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reminder)
      })

      const data = await response.json()

      dispatch({ type: ADD_REMINDER, payload: { ...reminder, id: data.name } })
    } catch (error) {
      dispatch({ type: ADD_REMINDER, payload: error })
    }
  }
}

export const toggleNotifications = id => {
  return async dispatch => {
    try {
      const response = await fetch(`${FIREBASE_RTDB_URL}/reminders/${id}.json`)
      const data = await response.json()

      const notifications = !data.notifications

      await fetch(`${FIREBASE_RTDB_URL}/reminders/${id}.json`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notifications })
      })

      dispatch({ type: TOGGLE_NOTIFICATIONS, payload: id })
    } catch (error) {
      dispatch({ type: TOGGLE_NOTIFICATIONS, payload: error })
    }
  }
}

export const editReminder = (id, data) => {
  return async dispatch => {
    try {
      await fetch(`${FIREBASE_RTDB_URL}/reminders/${id}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      dispatch({ type: EDIT_REMINDER, payload: { id, data } })
    } catch (error) {
      dispatch({ type: EDIT_REMINDER, payload: error })
    }
  }
}

export const removeReminder = id => {
  return async dispatch => {
    try {
      await fetch(`${FIREBASE_RTDB_URL}/reminders/${id}.json`, {
        method: 'DELETE'
      })

      dispatch({ type: REMOVE_REMINDER, payload: id })
    } catch (error) {
      dispatch({ type: REMOVE_REMINDER, payload: error })
    }
  }
}
