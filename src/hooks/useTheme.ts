import { useState } from 'react'
import ThemeColorEnum from '../Enums/ThemeColorEnum'
import ThemeModeEnum from '../Enums/ThemeModeEnum'

export default function useTheme() {
    const [themeColor, setThemeColor] = useState(() => {
        const themeColorStorage = localStorage.getItem('themeColor')
        return themeColorStorage ?? 'theme-red'
    })
    const [themeMode, setThemeMode] = useState(() => {
        const themeColorStorage = localStorage.getItem('themeMode')
        return themeColorStorage ?? 'system'
    })

    const changeColorTheme = (themeName: ThemeColorEnum) => {
        localStorage.setItem('themeColor', themeName)
        document.documentElement.classList.remove(themeColor)
        document.documentElement.classList.add(themeName)
        setThemeColor(themeName)
    }
    const changeModeTheme = (themeName: ThemeModeEnum) => {
        localStorage.setItem('themeMode', themeName)
        document.documentElement.classList.remove(
            themeMode === ThemeModeEnum.system &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
                ? ThemeModeEnum.dark
                : ThemeModeEnum.light
        )
        document.documentElement.classList.remove(themeMode)
        if (themeName !== 'system') {
            document.documentElement.classList.add(themeName)
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add(ThemeModeEnum.dark)
        } else if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add(ThemeModeEnum.light)
        }

        setThemeMode(themeName)
    }

    return { themeColor, changeColorTheme, themeMode, changeModeTheme }
}
