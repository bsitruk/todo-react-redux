import React from 'react'
import { useAppDispatch } from 'app/store'
import { useSelector } from 'react-redux'
import {
  setVisibilityFilter,
  getVisibilityFilter,
  VisibilityFilters,
} from './slices'

type Props = {
  filter: VisibilityFilters
  children: React.ReactNode
}

const FilterButton = ({ filter, children }: Props) => {
  const currentFilter = useSelector(getVisibilityFilter)
  const dispatch = useAppDispatch()

  return (
    <button
      disabled={currentFilter === filter}
      onClick={() => dispatch(setVisibilityFilter(filter))}
    >
      {children}
    </button>
  )
}

export default React.memo(FilterButton)
