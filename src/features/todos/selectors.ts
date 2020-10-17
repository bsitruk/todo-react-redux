import { createSelector } from '@reduxjs/toolkit'
import { AppState } from 'app/rootReducer'
import { getVisibilityFilter } from 'features/filters/selectors'
import { VisibilityFilters } from 'features/filters/types'

export const getTodos = (state: AppState) => state.todos

export const getVisibleTodos = createSelector(
  getTodos,
  getVisibilityFilter,
  (todos, visibilityFilter) => {
    switch (visibilityFilter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter((todo) => !todo.completed)
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter((todo) => todo.completed)
      default:
        throw new Error('Unknown filter: ' + visibilityFilter)
    }
  }
)
