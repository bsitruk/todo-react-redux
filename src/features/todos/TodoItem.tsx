import React from 'react'
import type { Todo } from './slices'

type Props = {
  todo: Todo
  onDelete: (id: Todo['id']) => void
  onToggle: (id: Todo['id']) => void
}

const TodoItem = ({ todo, onDelete, onToggle }: Props) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {todo.text}
      </label>
      <button onClick={() => onDelete(todo.id)}>x</button>
    </li>
  )
}

export default React.memo(TodoItem)
