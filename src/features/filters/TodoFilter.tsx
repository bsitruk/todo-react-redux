import { useAppDispatch } from 'app/store'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { getVisibilityFilter } from './selectors'
import { setFilter } from './slice'
import { VisibilityFilters } from './types'

const TodoFilter = () => {
  return (
    <div>
      <FilterButton filter={VisibilityFilters.SHOW_ALL}>All</FilterButton>
      <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterButton>
      <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterButton>
    </div>
  )
}

const FilterButton: FC<{
  filter: VisibilityFilters
  children: React.ReactNode
}> = ({ filter, children }) => {
  const currentFilter = useSelector(getVisibilityFilter)
  const dispatch = useAppDispatch()

  return (
    <button
      disabled={currentFilter === filter}
      onClick={() => dispatch(setFilter(filter))}
    >
      {children}
    </button>
  )
}

export default TodoFilter
