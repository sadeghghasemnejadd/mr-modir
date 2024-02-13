import {
    ReactElement,
    ReactNode,
    cloneElement,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
import cx from 'classnames'
import Icons from '../../icons/Icons'
import clickOutside from '../../utils/clickOutSide'

interface IActionContextValue {
    handleOpenMenu?: () => void
}
const ActionContext = createContext<IActionContextValue>({})
interface IHeaderProps {
    children: ReactNode
}
interface IBodyProps {
    children: ReactElement
}
interface IFooterProps {
    children: ReactNode
}
interface IActionButton {
    children: ReactNode
    name: string
    thumbnail?: ReactNode
    color?: 'main' | 'secondary'
    fixedWidth?: boolean
}

function ActionButton({
    children,
    name,
    thumbnail,
    color = 'main',
    fixedWidth = true,
}: IActionButton) {
    const actionButtonRef = useRef<HTMLDivElement>(null)
    const [openMenu, setOpenMenu] = useState<string>('')

    const handleOpenMenu = useCallback(() => {
        if (openMenu === name) {
            setOpenMenu('')
            return
        }
        setOpenMenu(name)
    }, [name, openMenu])

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

    const actionContextValue = useMemo(
        () => ({ handleOpenMenu }),
        [handleOpenMenu]
    )
    return (
        <ActionContext.Provider value={actionContextValue}>
            <div ref={actionButtonRef} className="relative">
                <button
                    className={cx(
                        '[&>svg]:size-3 rounded-md  p-1 ',
                        color === 'main' && 'bg-gray-300 dark:bg-stone-600',
                        color === 'secondary' && 'bg-gray-200 dark:bg-stone-600'
                    )}
                    aria-hidden="true"
                    onClick={handleOpenMenu}
                >
                    {thumbnail || <Icons name="ellipsis" />}
                </button>
                {openMenu === name && (
                    <div
                        className={cx(
                            fixedWidth ? 'w-48' : 'min-w-full',
                            'absolute left-full top-[70%] z-50 rounded-lg bg-stone-100 shadow-lg dark:bg-stone-700'
                        )}
                    >
                        {children}
                    </div>
                )}
            </div>
        </ActionContext.Provider>
    )
}

function Header({ children }: IHeaderProps) {
    return <div className="border-b-2 px-6 py-3">{children}</div>
}

function Body({ children }: IBodyProps) {
    const { handleOpenMenu } = useContext(ActionContext)
    return (
        <div className="w-full">
            {cloneElement(children, {
                onClick: () => handleOpenMenu?.(),
            })}
        </div>
    )
}

function Footer({ children }: IFooterProps) {
    return <div className="border-t-2 px-6 pb-3">{children}</div>
}

ActionButton.Header = Header
ActionButton.Body = Body
ActionButton.Footer = Footer

export default ActionButton
