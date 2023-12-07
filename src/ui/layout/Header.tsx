import { useSelector } from 'react-redux'
import HeaderMenuList from '../../Features/HeaderMenuList/HeaderMenuList'
import IReduxStore from '../../Models/reduxStore'

export default function Header() {
    const { isOverlay } = useSelector((state: IReduxStore) => state.navbar)

    return (
        <header
            className={`flex-rev-v-center bg-main shadow-main  ml-12 mt-6 h-full w-full rounded-md px-12 ${
                isOverlay ? 'col-[1/-1]' : 'col-[2/-1]'
            }`}
        >
            <HeaderMenuList />
        </header>
    )
}
