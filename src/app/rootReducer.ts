import { combineReducers } from '@reduxjs/toolkit'
import visibilityFilterReducer from 'features/filters/filtersSlice'
import todosReducer from 'features/todos/todosSlice'

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
