import { tasksTypes } from '../types'

const { GET_TASKS, ADD_TASK, TOGGLE_DONE, EDIT_TASK, REMOVE_TASK } = tasksTypes

const initialState = {
  items: []
}

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        items: action.payload
      }
    case ADD_TASK:
      return {
        ...state,
        items: [...state.items, action.payload]
      }

    case TOGGLE_DONE:
      return {
        ...state,
        items: state.items.map(task => {
          if (task.id === action.payload) {
            return {
              ...task,
              done: !task.done
            }
          }
          return task
        })
      }

    case EDIT_TASK:
      return {
        ...state,
        items: state.items.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              title: action.payload.data.title,
              description: action.payload.data.description,
              priority: action.payload.data.priority
            }
          }
          return task
        })
      }

    case REMOVE_TASK:
      return {
        ...state,
        items: state.items.filter(task => task.id !== action.payload)
      }

    default:
      return state
  }
}

export default tasksReducer
