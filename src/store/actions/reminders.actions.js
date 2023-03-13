import { remindersTypes } from '../types'
import {
  getReminders,
  insertReminder,
  updateReminder,
  toggleNotifications as toggleNotificationsDb,
  deleteReminder
} from '../../db'

const { GET_REMINDERS, ADD_REMINDER, TOGGLE_NOTIFICATIONS, EDIT_REMINDER, REMOVE_REMINDER } = remindersTypes

export const fetchReminders = () => {
  return async dispatch => {
    try {
      const reminders = await getReminders()

      dispatch({
        type: GET_REMINDERS,
        payload: reminders?.rows?._array || []
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const addReminder = reminder => {
  return async dispatch => {
    try {
      const newReminder = await insertReminder(reminder)

      dispatch({
        type: ADD_REMINDER,
        payload: { ...reminder, id: newReminder.insertId }
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const toggleNotifications = id => {
  return async dispatch => {
    try {
      await toggleNotificationsDb(id)

      dispatch({
        type: TOGGLE_NOTIFICATIONS,
        payload: id
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const editReminder = (id, data) => {
  return async dispatch => {
    try {
      await updateReminder(id, data)

      dispatch({
        type: EDIT_REMINDER,
        payload: { id, data }
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const removeReminder = id => {
  return async dispatch => {
    try {
      await deleteReminder(id)

      dispatch({
        type: REMOVE_REMINDER,
        payload: id
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}
