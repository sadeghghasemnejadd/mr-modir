import { useState } from 'react'
import { useSelector } from 'react-redux'
import IReduxStore from '../../Models/reduxStore'
import Divider from '../../ui/components/Divider'
import navbarItems, { INavBarItems } from '../../routes/navbarItems'
import Badge from '../../ui/components/Badge'
import findAndCreateHierarchy from '../../utils/createHierarchy'
import Icons from '../../icons/Icons'

interface IUnCollapseNavbarProps {
    handleClickCollpaseNav?: (isOver: boolean) => void
    onClick?: () => void
    isResponsive?: boolean
}

export default function UnCollapseNavbar({
    handleClickCollpaseNav,
    onClick,
    isResponsive = false,
}: IUnCollapseNavbarProps) {
    const { isOverlay } = useSelector((state: IReduxStore) => state.navbar)
    const [openedMenu, setOpenedMenu] = useState<string>('')

    const handleOpenMenu = (menuItem: INavBarItems) => {
        const itemHierarchy = findAndCreateHierarchy(menuItem, navbarItems)
        const isParentItem = itemHierarchy.split(':').length === 1
        const openedMenus = openedMenu.split(':')
        const isOpenedTarget = openedMenus.includes(menuItem.name)
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
            <ul className="flex-cols mb-0.5 gap-2 transition-all">
                {items.map((item) => {
                    const isActive = openedMenus.includes(item.name)
                    return (
                        <li
                            key={item.name}
                            className="flex-cols cursor-pointer gap-2 "
                        >
                            <div
                                className="group flex justify-between"
                                aria-hidden="true"
                                onClick={() => handleOpenMenu(item)}
                            >
                                <div className="flex items-center gap-2 text-sm">
                                    {!!item.icon && (
                                        <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:duration-0 group-hover:[&>svg]:fill-primary-600">
                                            <Icons name={item.icon} />
                                        </span>
                                    )}
                                    {!!item.icon || (
                                        <div className="flex h-5 w-5 items-center justify-end">
                                            <span className="h-1 w-1 rounded-full border border-stone-950 bg-stone-950 group-hover:border-primary-600 group-hover:bg-primary-600" />
                                        </div>
                                    )}
                                    <p className="group-hover:text-primary-600">
                                        {item.label}
                                    </p>
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
                                            className={`cursor-pointer rounded-full [&>svg]:h-3 [&>svg]:w-3 [&>svg]:transition-all [&>svg]:duration-300 ${
                                                openedMenu
                                                    .split(':')
                                                    .includes(item.name)
                                                    ? '[&>svg]:-rotate-90'
                                                    : ''
                                            }`}
                                        >
                                            <Icons name="angle-left" />
                                        </span>
                                    </div>
                                )}
                            </div>
                            {item.children && (
                                <div
                                    className={`menu-item ${
                                        isActive ? 'menu-item-active' : ''
                                    }`}
                                >
                                    {generateMenus(item.children)}
                                </div>
                            )}
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
                    onClick={() => {
                        handleClickCollpaseNav?.(!!isOverlay)
                        onClick?.()
                    }}
                    aria-hidden="true"
                >
                    <Icons name={isResponsive ? 'xmark' : 'angles-right'} />
                </span>
            </div>
            <Divider />
            <div>{generateMenus(navbarItems)}</div>
        </>
    )
}
