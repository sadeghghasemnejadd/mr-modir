import { ReactNode, useEffect, useRef, useState } from 'react'
import Icons from '../../icons/Icons'
import clickOutside from '../../utils/clickOutSide'

interface IHeaderProps {
    children: ReactNode
}
interface IBodyProps {
    children: ReactNode
}
interface IFooterProps {
    children: ReactNode
}
interface IActionButton {
    children: ReactNode
    name: string
}

function ActionButton({ children, name }: IActionButton) {
    const actionButtonRef = useRef<HTMLDivElement>(null)
    const [openMenu, setOpenMenu] = useState<string>('')

    const handleOpenMenu = () => {
        if (openMenu === name) {
            setOpenMenu('')
            return
        }
        setOpenMenu(name)
    }

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleClickOutside = (event: any): void => {
            clickOutside(
                event,
                () => {
                    setOpenMenu('')
                },
                actionButtonRef
            )
        }

        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [actionButtonRef])
    return (
        <div ref={actionButtonRef} className="relative">
            <button
                className="[&>svg]:size-3 rounded-md bg-gray-300 p-1 dark:bg-stone-600"
                aria-hidden="true"
                onClick={handleOpenMenu}
            >
                <Icons name="ellipsis" />
            </button>
            {openMenu === name && (
                <div className="absolute left-full top-[70%] w-48 rounded-lg bg-stone-50 shadow-lg dark:bg-stone-700">
                    {children}
                </div>
            )}
        </div>
    )
}

function Header({ children }: IHeaderProps) {
    return <div className="border-b-2 px-6 py-3">{children}</div>
}

function Body({ children }: IBodyProps) {
    return <div>{children}</div>
}

function Footer({ children }: IFooterProps) {
    return <div className="border-t-2 px-6 pb-3">{children}</div>
}

ActionButton.Header = Header
ActionButton.Body = Body
ActionButton.Footer = Footer

export default ActionButton
