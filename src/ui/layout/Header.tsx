import { useSelector } from 'react-redux'
import cx from 'classnames'

import HeaderMenuList from '../../Features/HeaderMenuList/HeaderMenuList'
import IReduxStore from '../../Models/reduxStore'

export default function Header() {
    const { isOverlay } = useSelector((state: IReduxStore) => state.navbar)

    return (
        <header
            className={cx(
                'flex-rev-v-center bg-main shadow-main size-full col-[1/-1] ml-12 mt-6 rounded-md px-3 lg:px-12',
                isOverlay ? 'col-[1/-1]' : 'lg:col-[2/-1]'
            )}
        >
            <HeaderMenuList />
        </header>
    )
}
