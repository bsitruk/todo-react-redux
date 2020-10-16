import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVisibilityFilter } from './filtersSelector'
import { setFilter } from './filtersSlice'
import { VisibilityFilters } from './filtersType'

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
  const dispatch = useDispatch()

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
