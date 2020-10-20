import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = ''

const searchFilterSlice = createSlice({
  name: 'search-filter',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      return action.payload
    },
  },
})

export const { setFilter } = searchFilterSlice.actions
export default searchFilterSlice.reducer
