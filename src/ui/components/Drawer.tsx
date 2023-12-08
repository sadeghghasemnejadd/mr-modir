import {
    createContext,
    ReactNode,
    useState,
    useMemo,
    useContext,
    useEffect,
    useRef,
    cloneElement,
    ReactElement,
} from 'react'
import clickOutside from '../../utils/clickOutSide'
import Divider from './Divider'
import LinkButton from './LinkButton'
import Icons from '../../icons/Icons'

interface IDrawerContextValue {
    openedDrawer?: string
    onOpenDrawer?: (drawerName: string) => void
    direction?: 'right' | 'left'
}
interface IFooterButtonOption {
    path: string
    children: ReactNode
}
interface IDrawerProps {
    children: ReactNode
    direction: 'right' | 'left'
}
interface IThumbnailProps {
    children: ReactNode
    name: string
    classNames?: string
}
interface IBoxProps {
    children: ReactElement
    name: string
    title?: string
    footerButtonOption?: IFooterButtonOption
    hasHeader?: boolean
}
const DrawerContext = createContext<IDrawerContextValue>({})

function Drawer({ children, direction }: IDrawerProps) {
    const [openedDrawer, setOpenedDrawer] = useState<string>('')
    const drawerRef = useRef<HTMLDivElement>(null)

    const onOpenDrawer = (drawerName: string) => {
        setOpenedDrawer(drawerName)
    }

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleClickOutside = (event: any): void => {
            clickOutside(
                event,
                () => {
                    onOpenDrawer('')
                },
                drawerRef
            )
        }

        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [drawerRef])

    const drawerContextValue = useMemo(
        () => ({ openedDrawer, onOpenDrawer, direction }),
        [openedDrawer, direction]
    )

    return (
        <DrawerContext.Provider value={drawerContextValue}>
            <div ref={drawerRef}>{children}</div>
        </DrawerContext.Provider>
    )
}
function Thumbnail({ children, name, classNames }: IThumbnailProps) {
    const { onOpenDrawer } = useContext(DrawerContext)

    const handleOpenDrawer = () => {
        onOpenDrawer?.(name)
    }
    return (
        <div
            onClick={handleOpenDrawer}
            aria-hidden="true"
            className={`cursor-pointer ${classNames}`}
        >
            {children}
        </div>
    )
}

function Box({
    children,
    name,
    title,
    footerButtonOption,
    hasHeader = true,
}: IBoxProps) {
    const { openedDrawer, direction, onOpenDrawer } = useContext(DrawerContext)

    const isOpened: boolean = openedDrawer === name
    return (
        <>
            <div
                className={`bg-main shadow-main fixed top-0  z-50 flex h-screen w-[80%] flex-col px-3 py-3 transition-all duration-300 md:w-[50%] md:px-6 xl:w-[30%] 2xl:w-[20%] 
                ${direction === 'right' ? 'right-0 translate-x-full' : ''}
                ${direction === 'left' ? 'left-0 -translate-x-full' : ''}
                ${
                    isOpened
                        ? direction === 'right'
                            ? '!-translate-x-0'
                            : '!translate-x-0'
                        : ''
                }`}
            >
                {hasHeader && (
                    <div className="flex-rev-v-center mb-3 justify-between border-b-[1px] border-b-stone-900/10 pb-2 dark:border-b-stone-50/10">
                        <span
                            className={`flex-center shadow-main md:[&>svg]:size-5 [&>svg]:size-4 cursor-pointer rounded-full  p-1 hover:bg-gray-200 dark:hover:bg-stone-600 md:p-2 [&>svg]:fill-primary-950 dark:[&>svg]:fill-primary-50
                    `}
                            aria-hidden="true"
                            onClick={() => onOpenDrawer?.('')}
                        >
                            <Icons name="xmark" size={20} />
                        </span>
                        {title && <h3 className="text-base-res">{title}</h3>}
                    </div>
                )}

                <div className="flex-1 overflow-y-auto">
                    {cloneElement(children, {
                        onClick: () => onOpenDrawer?.(''),
                    })}
                </div>
                {footerButtonOption && (
                    <div>
                        <Divider />
                        <LinkButton path={footerButtonOption.path}>
                            {footerButtonOption.children}
                        </LinkButton>
                    </div>
                )}
            </div>
            {openedDrawer === name && (
                <div
                    className="fixed left-0 top-0 z-40 h-screen w-screen animate-show bg-stone-300/50 backdrop-blur-[1px] dark:bg-stone-800/60"
                    onClick={() => onOpenDrawer?.('')}
                    aria-hidden="true"
                />
            )}
        </>
    )
}

Drawer.Thumbnail = Thumbnail
Drawer.Box = Box

export default Drawer
