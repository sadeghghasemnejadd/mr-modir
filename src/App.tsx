import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './ui/layout/AppLayout'
import Default from './pages/Dashborads/Default'

function App() {
    useEffect(() => {
        const themeColor = localStorage.getItem('themeColor')
        document.documentElement.className = ''
        document.documentElement.classList.add(themeColor ?? 'theme-red')
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
