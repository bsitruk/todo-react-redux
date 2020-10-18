import React from 'react'
import FilterButton from './FilterButton'
import SearchInput from './SearchInput'
import { VisibilityFilters } from './slices'

const TodoFilter = () => {
  console.log('TodoFilter -> TodoFilter')
  return (
    <div>
      <SearchInput />
      <FilterButton filter={VisibilityFilters.SHOW_ALL}>All</FilterButton>
      <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterButton>
      <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterButton>
    </div>
  )
}

export default React.memo(TodoFilter)
