import Activity from './Activity'
import Notifications from './Notifications'
import Profile from './Profile'
import SettingTheme from './SettingTheme'

export default function HeaderMenuList() {
    return (
        <ul className="flex-rev-v-center gap-8">
            <Profile />
            <Notifications />
            <SettingTheme />
            <Activity />
        </ul>
    )
}
