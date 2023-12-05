import { createSlice } from '@reduxjs/toolkit/react'

export interface INavbarState {
    isCollapse: boolean
    isOverlay: boolean
}
const initialState: INavbarState = {
    isCollapse: false,
    isOverlay: false,
}

const navbarReducer = createSlice({
    initialState,
    name: 'navbar',
    reducers: {
        collapseNav(state: INavbarState) {
            state.isCollapse = !state.isCollapse
        },
        overlayNav(state: INavbarState) {
            state.isOverlay = !state.isOverlay
        },
    },
})

export const { collapseNav, overlayNav } = navbarReducer.actions
export default navbarReducer.reducer
