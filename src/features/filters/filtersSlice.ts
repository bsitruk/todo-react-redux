import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { VisibilityFilters } from './filtersType'

const initialState = VisibilityFilters.SHOW_ALL

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<VisibilityFilters>) {
      return action.payload
    },
  },
})

export const { setFilter } = filtersSlice.actions
export default filtersSlice.reducer
