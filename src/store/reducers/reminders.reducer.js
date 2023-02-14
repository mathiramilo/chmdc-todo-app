import { remindersTypes } from '../types'

const { GET_REMINDERS, ADD_REMINDER, TOGGLE_NOTIFICATIONS, EDIT_REMINDER, REMOVE_REMINDER } = remindersTypes

const initialState = {
  items: []
}

const remindersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REMINDERS:
      return {
        ...state,
        items: action.payload
      }
    case ADD_REMINDER:
      return {
        ...state,
        items: [...state.items, action.payload]
      }

    case TOGGLE_NOTIFICATIONS:
      return {
        ...state,
        items: state.items.map(reminder => {
          if (reminder.id === action.payload) {
            return {
              ...reminder,
              notifications: !reminder.notifications
            }
          }
          return reminder
        })
      }

    case EDIT_REMINDER:
      return {
        ...state,
        items: state.items.map(reminder => {
          if (reminder.id === action.payload.id) {
            return {
              ...reminder,
              title: action.payload.data.title,
              description: action.payload.data.description,
              time: action.payload.data.time
            }
          }
          return reminder
        })
      }

    case REMOVE_REMINDER:
      return {
        ...state,
        items: state.items.filter(reminder => reminder.id !== action.payload)
      }

    default:
      return state
  }
}

export default remindersReducer
