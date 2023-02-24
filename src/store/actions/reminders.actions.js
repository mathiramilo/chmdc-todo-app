import { remindersTypes } from '../types'

const { GET_REMINDERS, ADD_REMINDER, TOGGLE_NOTIFICATIONS, EDIT_REMINDER, REMOVE_REMINDER } = remindersTypes

// Fetch the reminders from the device storage or sqlite db
export const getReminders = () => {
  return {
    type: GET_REMINDERS,
    payload: reminders
  }
}

export const addReminder = reminder => {
  return {
    type: ADD_REMINDER,
    payload: reminder
  }
}

export const toggleNotifications = id => {
  return {
    type: TOGGLE_NOTIFICATIONS,
    payload: id
  }
}

export const editReminder = (id, data) => {
  return {
    type: EDIT_REMINDER,
    payload: { id, data }
  }
}

export const removeReminder = id => {
  return {
    type: REMOVE_REMINDER,
    payload: id
  }
}
