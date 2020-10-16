import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, getVisibleTodos } from './todosSlice'
import { Todo } from './todosTypes'

export const Todos = () => {
  const todos = useSelector(getVisibleTodos)
  const dispatch = useDispatch()

  const handleDelete = useCallback(
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
          onDelete={handleDelete}
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
