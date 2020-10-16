export type Todo = {
  id: number
  title: string
  completed: boolean
}

export type UncompletedTodo = Todo & {
  completed: false
}

// *** TodoSlice Types *** //

export type TodoState = Todo[]

export type AddTodoPayload = {
  id: number
  title: string
}
