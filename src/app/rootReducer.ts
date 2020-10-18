import { combineReducers } from '@reduxjs/toolkit'
import {
  visibilityFilterReducer,
  searchFilterReducer,
} from 'features/filters/slices'
import { todosReducer } from 'features/todos/slices'

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  searchFilter: searchFilterReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
