import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import rootReducer, { AppState } from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, AppState, null, Action<string>>

export default store
