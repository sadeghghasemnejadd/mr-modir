import Activity from './Activity'
import Notifications from './Notifications'
import Profile from './Profile'
import SettingTheme from './SettingTheme'

export default function HeaderMenuList() {
    return (
        <ul className="flex flex-row-reverse items-center gap-6">
            <Profile />
            <Notifications />
            <SettingTheme />
            <Activity />
        </ul>
    )
}
