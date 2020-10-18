export type Todo = {
  id: number
  text: string
  completed: boolean
}

export type UncompletedTodo = Todo & {
  completed: false
}

// *** TodoSlice Types *** //

export type TodoState = Todo[]

export type AddTodoPayload = {
  text: string
}
