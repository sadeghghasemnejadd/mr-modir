import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from '../Features/Navbar/navbarReducer'
import headerReducer from '../Features/HeaderMenuList/redux/header'

const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        header: headerReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export default store
