import { createSelector } from '@reduxjs/toolkit'
import { AppState } from 'app/rootReducer'
import {
  getVisibilityFilter,
  getSearchFilter,
  VisibilityFilters,
} from 'features/filters/slices'

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

export const getFilteredTodos = createSelector(
  getVisibleTodos,
  getSearchFilter,
  (todos, searchFilter) => {
    if (!searchFilter) return todos

    const filter = searchFilter.toUpperCase()
    return todos.filter((todo) => todo.text.toUpperCase().includes(filter))
  }
)
