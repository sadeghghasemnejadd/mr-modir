import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import cx from 'classnames'

import Header from './Header'
import Main from './Main'
import Nav from './Nav'
import IReduxStore from '../../Models/reduxStore'
import routes from '../../routes/routes'

export default function AppLayout() {
    const location = useLocation()
    const activePage = routes.find((route) => route.route === location.pathname)
    const { isOverlay } = useSelector((state: IReduxStore) => state.navbar)

    useEffect(() => {
        document.title = activePage?.title || 'mr-modir'
    }, [activePage])

    return (
        <div
            className={cx(
                'grid max-h-screen min-h-screen w-full grid-cols-1 grid-rows-[75px_1fr] gap-6 overflow-hidden px-4 lg:grid-cols-[250px_1fr] lg:pr-0 xl:grid-cols-[300px_1fr]',
                isOverlay && '!mr-auto !w-[calc(100%-7.5rem)] !grid-cols-[1fr]'
            )}
        >
            <Header />
            <Nav />
            <Main>
                <Outlet />
            </Main>
        </div>
    )
}
