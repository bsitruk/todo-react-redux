import { VisibilityFilters } from 'features/filters/filtersType'
import { TodoState } from 'features/todos/todosTypes'

export type AppState = {
  todos: TodoState
  visibilityFilter: VisibilityFilters
}
