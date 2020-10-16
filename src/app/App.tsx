import TodoFilter from 'features/filters/TodoFilter'
import React from 'react'
import { Todos } from '../features/todos/Todos'

function App() {
  return (
    <div>
      <Todos></Todos>
      <TodoFilter></TodoFilter>
    </div>
  )
}

export default App
