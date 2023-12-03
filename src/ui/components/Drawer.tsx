import {
    createContext,
    ReactNode,
    useState,
    useMemo,
    useContext,
    useEffect,
    useRef,
} from 'react'
import { PiX } from 'react-icons/pi'
import clickOutside from '../../utils/clickOutSide'
import Divider from './Divider'
import LinkButton from './LinkButton'

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
    children: ReactNode
    name: string
    title?: string
    footerButtonOption?: IFooterButtonOption
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

function Box({ children, name, title, footerButtonOption }: IBoxProps) {
    const { openedDrawer, direction, onOpenDrawer } = useContext(DrawerContext)

    const isOpened: boolean = openedDrawer === name
    return (
        <>
            <div
                className={`bg-main shadow-main fixed top-0  z-50 flex h-screen w-[30rem] flex-col px-6 py-3 transition-all duration-300 
                ${direction === 'right' ? 'right-0 translate-x-full' : ''}
                ${direction === 'left' ? 'left-0 -translate-x-full' : ''}
                ${
                    isOpened
                        ? `${direction === 'right' ? '-' : ''}translate-x-0`
                        : ''
                }`}
            >
                <div className="flex-rev-v-center mb-3 justify-between border-b-[1px] border-b-slate-900/10 pb-2 dark:border-b-slate-50/10">
                    <span
                        className={`flex-center shadow-main  cursor-pointer  rounded-full  p-2  hover:bg-gray-200 dark:hover:bg-slate-600 [&>svg]:fill-primary-950 dark:[&>svg]:fill-primary-50
                    `}
                        aria-hidden="true"
                        onClick={() => onOpenDrawer?.('')}
                    >
                        <PiX size={20} />
                    </span>
                    {title && <h3>{title}</h3>}
                </div>
                <div className="flex-1 overflow-y-auto">{children}</div>
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
                    className="fixed left-0 top-0 z-40 h-screen w-screen animate-show bg-slate-300/50 backdrop-blur-[1px] dark:bg-slate-800/60"
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