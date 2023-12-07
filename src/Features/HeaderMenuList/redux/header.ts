import { createSlice } from '@reduxjs/toolkit/react'

export interface IHeaderReduxState {
    isCollapseSearch: boolean
}
const initialState: IHeaderReduxState = {
    isCollapseSearch: false,
}

const headerSlice = createSlice({
    initialState,
    name: 'header',
    reducers: {
        collapseSearch(state: IHeaderReduxState) {
            state.isCollapseSearch = true
        },
        unCollapseSearch(state: IHeaderReduxState) {
            state.isCollapseSearch = false
        },
    },
})

export default headerSlice.reducer

export const { collapseSearch, unCollapseSearch } = headerSlice.actions
