import { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CollapseNavbar from '../../Features/Navbar.tsx/CollapseNavbar'
import IReduxStore from '../../Models/reduxStore'
import {
    collapseNav,
    overlayNav,
} from '../../Features/Navbar.tsx/navbarReducer'
import UnCollapseNavbar from '../../Features/Navbar.tsx/UnCollapseNavbar'

export default function Nav() {
    const dispatch = useDispatch()
    const isOverLayRef = useRef(true)
    const { isCollapse, isOverlay } = useSelector(
        (state: IReduxStore) => state.navbar
    )

    useEffect(() => {
        if (isCollapse) {
            setTimeout(() => {
                isOverLayRef.current = false
            }, 600)
        } else {
            isOverLayRef.current = true
        }
    }, [isCollapse])

    const handleClickCollpaseNav = (isOver: boolean) => {
        if (!isOver) {
            dispatch(collapseNav())
        }
        dispatch(overlayNav())
    }
    const handleMouseEnter = () => {
        if (!isCollapse || !isOverlay || isOverLayRef.current) return
        dispatch(collapseNav())
    }
    const handleMouseLeave = () => {
        if (isCollapse || !isOverlay) return
        dispatch(collapseNav())
    }

    return (
        <nav
            className={`bg-main shadow-main col-[1/2] row-span-full h-full w-[300px] overflow-x-hidden  p-6 transition-all duration-500 
            ${isOverlay ? 'fixed right-0 top-0' : ''}
            ${isCollapse ? '!w-24 px-3' : ''}
            `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isCollapse && <CollapseNavbar />}
            {isCollapse || (
                <UnCollapseNavbar
                    handleClickCollpaseNav={handleClickCollpaseNav}
                />
            )}
        </nav>
    )
}
