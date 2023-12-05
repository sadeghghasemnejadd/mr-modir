import { useSelector } from 'react-redux'
import { PiCaretDoubleRight } from 'react-icons/pi'
import IReduxStore from '../../Models/reduxStore'
import Divider from '../../ui/components/Divider'

interface IUnCollapseNavbarProps {
    handleClickCollpaseNav: (isOver: boolean) => void
}

export default function UnCollapseNavbar({
    handleClickCollpaseNav,
}: IUnCollapseNavbarProps) {
    const { isOverlay } = useSelector((state: IReduxStore) => state.navbar)
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
            <ul>
                <li>home</li>
            </ul>
        </>
    )
}
