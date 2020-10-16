import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from 'app/stateTypes'
import { getVisibilityFilter } from 'features/filters/filtersSlice'
import { VisibilityFilters } from 'features/filters/filtersType'
import { AddTodoPayload, UncompletedTodo, Todo, TodoState } from './todosTypes'

const initialState: TodoState = [
  { id: 1, title: 'My first task', completed: false },
  { id: 2, title: 'My second task', completed: false },
]

// let nextTodoId = 3

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<AddTodoPayload>) {
      const { id, title } = action.payload
      const todo: UncompletedTodo = { id, title, completed: false }
      state.push(todo)
    },
    toggleTodo(state, action: PayloadAction<Todo['id']>) {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo(state, action: PayloadAction<Todo['id']>) {
      const index = state.findIndex((todo) => todo.id === action.payload)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
  },
})

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

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions
export default todosSlice.reducer
