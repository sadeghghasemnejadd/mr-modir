import { useState } from 'react'
import { useSelector } from 'react-redux'
import { PiCaretLeft, PiCaretDoubleRight } from 'react-icons/pi'
import IReduxStore from '../../Models/reduxStore'
import Divider from '../../ui/components/Divider'
import navbarItems, { INavBarItems } from '../../routes/navbarItems'
import Badge from '../../ui/components/Badge'
import findAndCreateHierarchy from '../../utils/createHierarchy'

interface IUnCollapseNavbarProps {
    handleClickCollpaseNav: (isOver: boolean) => void
}

export default function UnCollapseNavbar({
    handleClickCollpaseNav,
}: IUnCollapseNavbarProps) {
    const { isOverlay } = useSelector((state: IReduxStore) => state.navbar)
    const [openedMenu, setOpenedMenu] = useState<string>('')

    const handleOpenMenu = (menuItem: INavBarItems) => {
        const itemHierarchy = findAndCreateHierarchy(menuItem, navbarItems)
        const isParentItem = itemHierarchy.split(':').length === 1
        const openedMenus = openedMenu.split(':')
        const isOpenedTarget = openedMenus.includes(menuItem.name)
        console.log(itemHierarchy)
        if (isParentItem && isOpenedTarget) {
            setOpenedMenu('')
        } else if (isParentItem && !isOpenedTarget) {
            setOpenedMenu(itemHierarchy)
        } else if (!isOpenedTarget) {
            setOpenedMenu(itemHierarchy)
        } else {
            const indexOfTargetItem = openedMenus.indexOf(menuItem.name)
            setOpenedMenu(openedMenus.slice(0, indexOfTargetItem).join(':'))
        }
    }

    const generateMenus = (items: INavBarItems[]) => {
        const openedMenus = openedMenu ? openedMenu.split(':') : []
        return (
            <ul className="flex-cols gap-2">
                {items.map((item) => {
                    return (
                        <li key={item.name} className="flex-cols gap-2">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-1 text-sm">
                                    {!!item.icon && (
                                        <span className="[&>svg]:h-5 [&>svg]:w-5">
                                            {item.icon}
                                        </span>
                                    )}
                                    {!!item.icon || (
                                        <span className="h-1.5 w-1.5 rounded-full border border-stone-950" />
                                    )}
                                    <p>{item.label}</p>
                                </div>
                                {item.children && (
                                    <div className="flex items-center gap-2">
                                        {item.badge && (
                                            <Badge
                                                text={item.badge}
                                                rounded
                                                size="xs"
                                                color="main"
                                            />
                                        )}
                                        <span
                                            className={`flex-center h-4 w-4 cursor-pointer rounded-full bg-stone-200 p-[1px] [&>svg]:transition-all [&>svg]:duration-500 ${
                                                openedMenu
                                                    .split(':')
                                                    .includes(item.name)
                                                    ? '[&>svg]:-rotate-90'
                                                    : ''
                                            }`}
                                            aria-hidden="true"
                                            onClick={() => handleOpenMenu(item)}
                                        >
                                            <PiCaretLeft />
                                        </span>
                                    </div>
                                )}
                            </div>
                            {item.children &&
                                !!openedMenus.length &&
                                openedMenus.includes(item.name) &&
                                generateMenus(item.children)}
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <>
            <div className="flex w-full items-center justify-between">
                <div className="flex w-full items-center gap-3 [&>svg]:h-14 [&>svg]:w-14 ">
                    <img
                        src="images/logo/logo.png"
                        alt="logo"
                        className="h-14 w-14"
                    />
                    <h2 className="text-lg font-extrabold">آقای مدیر</h2>
                </div>
                <span
                    className={`cursor-pointer transition-all duration-500 ${
                        isOverlay ? '-rotate-180' : ''
                    }`}
                    onClick={() => handleClickCollpaseNav(!!isOverlay)}
                    aria-hidden="true"
                >
                    <PiCaretDoubleRight />
                </span>
            </div>
            <Divider />
            <div>{generateMenus(navbarItems)}</div>
        </>
    )
}
