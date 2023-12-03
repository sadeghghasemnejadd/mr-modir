import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './ui/layout/AppLayout'
import Default from './pages/Dashborads/Default'

function App() {
    useEffect(() => {
        const themeColorLocal = localStorage.getItem('themeColor')
        const themeMode = localStorage.getItem('themeMode')
        document.documentElement.classList.add(themeColorLocal ?? 'theme-red')
        if (themeMode !== 'system' && themeMode) {
            document.documentElement.classList.add(themeMode)
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark')
        } else if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('light')
        }
    }, [])
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route element={<Default />} path="/" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
