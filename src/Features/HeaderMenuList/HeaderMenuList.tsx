import Notifications from './Notifications'
import Profile from './Profile'

export default function HeaderMenuList() {
    return (
        <ul className="flex flex-row-reverse items-center gap-6">
            <Profile />
            <Notifications />
        </ul>
    )
}
