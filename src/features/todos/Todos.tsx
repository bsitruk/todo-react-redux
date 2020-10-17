import { useAppDispatch } from 'app/store'
import React, { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getVisibleTodos } from './selectors'
import { deleteTodo } from './slice'
import { Todo } from './types'

export const Todos = () => {
  const todos = useSelector(getVisibleTodos)
  const dispatch = useAppDispatch()

  const onDelete = useCallback(
    (id: Todo['id']) => {
      dispatch(deleteTodo(id))
    },
    [dispatch]
  )

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItemMemo
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
        ></TodoItemMemo>
      ))}
    </ul>
  )
}

const TodoItem: FC<{
  todo: Todo
  onDelete: (id: Todo['id']) => void
}> = ({ todo, onDelete }) => {
  return (
    <li>
      <button onClick={() => onDelete(todo.id)}>x</button>
      {todo.title}
    </li>
  )
}

const TodoItemMemo = React.memo(TodoItem)
