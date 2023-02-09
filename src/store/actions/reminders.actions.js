import { remindersTypes } from '../types'

const { ADD_REMINDER, TOGGLE_NOTIFICATIONS, EDIT_REMINDER, REMOVE_REMINDER } = remindersTypes

export const addReminder = reminder => ({
  type: ADD_REMINDER,
  payload: reminder
})

export const toggleNotifications = id => ({
  type: TOGGLE_NOTIFICATIONS,
  payload: id
})

export const editReminder = (id, data) => ({
  type: EDIT_REMINDER,
  payload: { id, data }
})

export const removeReminder = id => ({
  type: REMOVE_REMINDER,
  payload: id
})
