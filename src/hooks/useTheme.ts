import { useState } from 'react'
import ThemeColorEnum from '../Enums/themeColorEnum'

export default function useTheme() {
    const [themeColor, setThemeColor] = useState(() => {
        const themeColorStorage = localStorage.getItem('themeColor')
        return themeColorStorage ?? 'theme-red'
    })

    const changeColorTheme = (themeName: ThemeColorEnum) => {
        localStorage.setItem('themeColor', themeName)
        document.documentElement.className = ''
        document.documentElement.classList.add(themeName)
        setThemeColor(themeName)
    }

    return { themeColor, changeColorTheme }
}
