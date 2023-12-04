import Activity from './Activity'
import HeaderSearch from './HeaderSearch'
import Notifications from './Notifications'
import Profile from './Profile'
import SettingTheme from './SettingTheme'

export default function HeaderMenuList() {
    return (
        <ul className="flex-rev-v-center w-full gap-8">
            <Profile />
            <Notifications />
            <SettingTheme />
            <Activity />
            <HeaderSearch />
        </ul>
    )
}
