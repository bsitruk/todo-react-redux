import { useAppDispatch } from 'app/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { getSearchFilter, setSearchFilter } from './slices'

const SearchInput = () => {
  const filter = useSelector(getSearchFilter)
  const dispatch = useAppDispatch()

  const setFilter = (value: string) => {
    dispatch(setSearchFilter(value.trim()))
  }

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.currentTarget.value)}
      />
      <button onClick={() => setFilter('')}>Reset</button>
    </div>
  )
}

export default React.memo(SearchInput)
