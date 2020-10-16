import { combineReducers } from '@reduxjs/toolkit'
import visibilityFilterReducer from 'features/filters/filtersSlice'
import todosReducer from 'features/todos/todosSlice'
import { AppState } from './stateTypes'

export default combineReducers<AppState>({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
})
