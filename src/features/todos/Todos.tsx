import { useAppDispatch } from 'app/store'
import TodoFilter from 'features/filters/TodoFilter'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getFilteredTodos, deleteTodo, toggleTodo } from './slices'
import type { Todo } from './slices'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

export const Todos = () => {
  const todos = useSelector(getFilteredTodos)
  const dispatch = useAppDispatch()

  const onDelete = useCallback(
    (id: Todo['id']) => {
      dispatch(deleteTodo(id))
    },
    [dispatch]
  )

  const onToggle = useCallback(
    (id: Todo['id']) => {
      dispatch(toggleTodo(id))
    },
    [dispatch]
  )

  return (
    <div>
      <TodoFilter />

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
          ></TodoItem>
        ))}
      </ul>

      <TodoInput />
    </div>
  )
}
