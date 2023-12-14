import {
    ReactElement,
    ReactNode,
    cloneElement,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useRef,
    useState,
} from 'react'
import cx from 'classnames'
import { createPortal } from 'react-dom'
import Icons from '../../icons/Icons'

interface IModalContext {
    openedModal?: string
    handleToggleModal?: (state: 'open' | 'close') => void
}

interface IModalProps {
    children: ReactNode
    name: string
}
interface IOpenProps {
    children: ReactElement
}

interface IContentProps {
    children: ReactNode
    name: string
    size?: 'md' | 'lg'
}

const ModalContext = createContext<IModalContext>({})

function Modal({ children, name }: IModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)
    const [openedModal, setOpenedModal] = useState<string>('')
    const handleToggleModal = useCallback(
        (state: 'open' | 'close') => {
            if (state === 'open') {
                setOpenedModal(name)
            }
            if (state === 'close') {
                setOpenedModal('')
            }
        },
        [name]
    )
    const modalContextValue = useMemo(
        () => ({ openedModal, handleToggleModal }),
        [openedModal, handleToggleModal]
    )
    return (
        <ModalContext.Provider value={modalContextValue}>
            <div ref={modalRef}>{children}</div>
        </ModalContext.Provider>
    )
}

function Open({ children }: IOpenProps) {
    const { handleToggleModal } = useContext(ModalContext)

    return cloneElement(children, {
        onClick: () => handleToggleModal?.('open'),
    })
}

function Content({ children, name, size = 'md' }: IContentProps) {
    const { openedModal, handleToggleModal } = useContext(ModalContext)

    if (openedModal !== name) return undefined
    return createPortal(
        <>
            <div
                className="fixed inset-0 z-50 h-full w-full backdrop-blur-sm"
                aria-hidden="true"
                onClick={() => handleToggleModal?.('close')}
            />
            <div
                className={cx(
                    'bg-main shadow-main flex-cols fixed left-1/2 top-1/2 z-[60] max-h-[90%] -translate-x-1/2 -translate-y-1/2 gap-6 overflow-y-auto rounded-lg px-12 py-6',
                    size === 'lg' && 'w-11/12'
                )}
            >
                <span
                    className="cursor-pointer self-start"
                    aria-hidden="true"
                    onClick={() => handleToggleModal?.('close')}
                >
                    <Icons name="xmark" />
                </span>
                <div>{children}</div>
            </div>
        </>,
        document.body
    )
}
Modal.Open = Open
Modal.Content = Content
export default Modal
