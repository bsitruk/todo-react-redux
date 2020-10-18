import { AppState } from 'app/rootReducer'

export const getVisibilityFilter = (state: AppState) => state.visibilityFilter
export const getSearchFilter = (state: AppState) => state.searchFilter
