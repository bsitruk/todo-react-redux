import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from 'app/stateTypes'
import { VisibilityFilters } from './filtersType'

const initialState = VisibilityFilters.SHOW_ALL as VisibilityFilters

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<VisibilityFilters>) {
      return action.payload
    },
  },
})

export const getVisibilityFilter = (state: AppState) => state.visibilityFilter

export const { setFilter } = filtersSlice.actions
export default filtersSlice.reducer
