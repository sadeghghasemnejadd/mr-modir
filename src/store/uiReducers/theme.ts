import { createSlice } from '@reduxjs/toolkit/react'
import ThemeModeEnum from '../../Enums/ThemeModeEnum'

type ThemeModeType = 'dark' | 'light' | 'system'
export interface IThemeState {
    themeMode: ThemeModeType
    themeColor: string
}
const initialState: IThemeState = {
    themeMode: (localStorage.getItem('themeMode') as ThemeModeType) || 'system',
    themeColor: localStorage.getItem('themeColor') || 'theme-red',
}

const themeSlice = createSlice({
    initialState,
    name: 'theme',
    reducers: {
        changeColorTheme(state, action) {
            localStorage.setItem('themeColor', action.payload)
            document.documentElement.classList.remove(state.themeColor)
            document.documentElement.classList.add(action.payload)
            state.themeColor = action.payload
        },
        changeModeTheme(state, action) {
            localStorage.setItem('themeMode', action.payload)
            document.documentElement.classList.remove(
                action.payload === ThemeModeEnum.system &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? ThemeModeEnum.dark
                    : ThemeModeEnum.light
            )
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.remove('light')
            if (action.payload !== ThemeModeEnum.system) {
                document.documentElement.classList.add(action.payload)
            } else if (
                window.matchMedia('(prefers-color-scheme: dark)').matches
            ) {
                document.documentElement.classList.add(ThemeModeEnum.dark)
            } else if (
                !window.matchMedia('(prefers-color-scheme: dark)').matches
            ) {
                document.documentElement.classList.add(ThemeModeEnum.light)
            }

            state.themeMode = action.payload
        },
    },
})

export default themeSlice.reducer

export const { changeColorTheme, changeModeTheme } = themeSlice.actions
