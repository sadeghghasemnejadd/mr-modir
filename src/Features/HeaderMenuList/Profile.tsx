import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import RolesEnum from '../../Enums/RolesEnum'
import Badge from '../../ui/components/Badge'
import Divider from '../../ui/components/Divider'
import HeaderDropdown from '../../ui/components/HeaderDropdown'
import Icons from '../../icons/Icons'

interface IProfileUtilsList {
    id: number
    name: string
    icon: ReactNode
    route: string
    badge?: string | number
    badgeColor?: 'success' | 'error'
}
const profileUtilsList: IProfileUtilsList[] = [
    {
        id: 0,
        name: 'پروفایل من',
        icon: <Icons name="user" size={20} />,
        route: '/',
    },
    {
        id: 1,
        name: 'پروژه های من',
        icon: <Icons name="clipboard-list-check" size={20} />,
        route: '/',
        badge: '5',
        badgeColor: 'success',
    },
    {
        id: 2,
        name: 'تنظیمات',
        icon: <Icons name="gear" size={20} />,
        route: '/',
    },
    {
        id: 3,
        name: 'پرداخت',
        icon: <Icons name="credit-card" size={20} />,
        route: '/',
        badge: '2',
        badgeColor: 'error',
    },
]
const profileSettingList: IProfileUtilsList[] = [
    {
        id: 0,
        name: 'سوالات متداول',
        icon: <Icons name="circle-question" size={20} />,
        route: '/',
    },
    {
        id: 1,
        name: 'قیمت گذاری',
        icon: <Icons name="dollar-sign" size={20} />,
        route: '/',
    },
    {
        id: 2,
        name: 'خروج',
        icon: <Icons name="arrow-right-from-bracket" size={20} />,
        route: '/',
    },
]

export default function Profile() {
    return (
        <li>
            <HeaderDropdown>
                <HeaderDropdown.Thumbnail name="profile">
                    <div className="relative">
                        <img
                            src="images/avatars/001.png"
                            alt="avatar"
                            className="size-12 avatar"
                        />
                        <span className="online-state animate-ping" />
                        <span className="online-state" />
                    </div>
                </HeaderDropdown.Thumbnail>
                <HeaderDropdown.DropBox name="profile">
                    <div className="flex gap-4">
                        <img
                            src="images/avatars/001.png"
                            alt="avatar"
                            className="avatar h-16 w-16"
                        />
                        <div className="flex-col-v-center text-right ">
                            <div className="flex-v-center gap-3">
                                <p className="font-bold">صادق قاسم نژاد</p>
                                <Badge text={RolesEnum.Admin} />
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                ghasemnejad.sadegh@gmail.com
                            </p>
                        </div>
                    </div>
                    <Divider />
                    <ul className="flex-cols">
                        {profileUtilsList.map((profile) => (
                            <li
                                key={profile.id}
                                className=" group rounded-lg transition-all hover:bg-primary-100  dark:hover:bg-primary-900"
                            >
                                <Link
                                    to={profile.route}
                                    className="[&>svg]:profile-icon flex-v-center gap-2 p-3 font-bold group-hover:text-primary-700 dark:group-hover:text-primary-100 [&>svg]:group-hover:fill-primary-600 dark:[&>svg]:group-hover:fill-primary-100"
                                >
                                    {profile.icon}
                                    {profile.name}
                                    {profile.badge && (
                                        <Badge
                                            text={profile.badge}
                                            color={profile.badgeColor}
                                            size="sm"
                                            rounded
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Divider />
                    <ul className="flex-cols">
                        {profileSettingList.map((profile) => (
                            <li
                                key={profile.id}
                                className=" group  rounded-lg transition-all hover:bg-primary-100  dark:hover:bg-primary-900"
                            >
                                <Link
                                    to={profile.route}
                                    className="flex-v-center gap-2 px-3 py-3 font-bold no-underline group-hover:text-primary-700 dark:group-hover:text-primary-100 [&>svg]:group-hover:fill-primary-600 dark:[&>svg]:group-hover:fill-primary-100"
                                >
                                    {profile.icon}
                                    {profile.name}
                                    {profile.badge && (
                                        <Badge
                                            text={profile.badge}
                                            color={profile.badgeColor}
                                            size="sm"
                                            rounded
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </HeaderDropdown.DropBox>
            </HeaderDropdown>
        </li>
    )
}
