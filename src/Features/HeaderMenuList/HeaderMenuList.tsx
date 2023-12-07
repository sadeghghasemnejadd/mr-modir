import { useSelector } from 'react-redux'
import IReduxStore from '../../Models/reduxStore'
import Activity from './Activity'
import HeaderSearch from './HeaderSearch'
import Notifications from './Notifications'
import Profile from './Profile'
import SettingTheme from './SettingTheme'

export default function HeaderMenuList() {
    const { isCollapseSearch } = useSelector(
        (state: IReduxStore) => state.header
    )
    return (
        <ul className="flex-rev-v-center w-full gap-4 md:gap-8">
            {!isCollapseSearch && (
                <>
                    <Profile />
                    <Notifications />
                    <SettingTheme />
                    <Activity />
                </>
            )}
            <HeaderSearch />
        </ul>
    )
}
