import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from './filtersSlice'
import { VisibilityFilters } from './filtersType'

const TodoFilter = () => {
  const dispatch = useDispatch()

  const changeFilter = (filter: VisibilityFilters) => {
    dispatch(setFilter(filter))
  }

  return (
    <div>
      <button onClick={() => changeFilter(VisibilityFilters.SHOW_ALL)}>
        All
      </button>
      <button onClick={() => changeFilter(VisibilityFilters.SHOW_ACTIVE)}>
        Active
      </button>
      <button onClick={() => changeFilter(VisibilityFilters.SHOW_COMPLETED)}>
        Completed
      </button>
    </div>
  )
}

export default TodoFilter
