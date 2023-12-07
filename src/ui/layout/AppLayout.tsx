import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Header from './Header'
import Main from './Main'
import Nav from './Nav'
import IReduxStore from '../../Models/reduxStore'

export default function AppLayout() {
    const { isOverlay } = useSelector((state: IReduxStore) => state.navbar)
    return (
        <div
            className={`grid max-h-screen min-h-screen grid-cols-1 grid-rows-[75px_1fr] gap-6 overflow-hidden px-4 md:grid-cols-[300px_1fr] ${
                isOverlay ? 'mr-auto w-[calc(100%-7.5rem)] grid-cols-[1fr]' : ''
            }`}
        >
            <Header />
            <Nav />
            <Main>
                <Outlet />
            </Main>
        </div>
    )
}
