import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, AppThunk } from 'app/store'
import { wait } from 'common/utils'
import { AddTodoPayload, UncompletedTodo, Todo, TodoState } from './types'

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

export const createTodo = (payload: AddTodoPayload): AppThunk => async (
  dispatch: AppDispatch
) => {
  await wait(2000)
  dispatch(addTodo(payload))
}

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions
export default todosSlice.reducer
