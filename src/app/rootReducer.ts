import { combineReducers } from '@reduxjs/toolkit'
import visibilityFilterReducer from 'features/filters/slice'
import todosReducer from 'features/todos/slice'

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
