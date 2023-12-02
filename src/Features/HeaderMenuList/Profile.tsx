import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
    TbUserCheck,
    TbSettings,
    TbCreditCard,
    TbCalendarCheck,
} from 'react-icons/tb'

import {
    PiSignOut,
    PiCurrencyDollarSimpleLight,
    PiQuestionThin,
} from 'react-icons/pi'
import RolesEnum from '../../Enums/RolesEnum'
import Badge from '../../ui/components/Badge'
import Divider from '../../ui/components/Divider'
import HeaderDropdown from '../../ui/components/HeaderDropdown'

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
        icon: <TbUserCheck size={20} color="868e96" />,
        route: '/',
    },
    {
        id: 1,
        name: 'پروژه های من',
        icon: <TbCalendarCheck size={20} color="868e96" />,
        route: '/',
        badge: '5',
        badgeColor: 'success',
    },
    {
        id: 2,
        name: 'تنظیمات',
        icon: <TbSettings size={20} color="868e96" />,
        route: '/',
    },
    {
        id: 3,
        name: 'پرداخت',
        icon: <TbCreditCard size={20} color="868e96" />,
        route: '/',
        badge: '2',
        badgeColor: 'error',
    },
]
const profileSettingList: IProfileUtilsList[] = [
    {
        id: 0,
        name: 'سوالات متداول',
        icon: <PiQuestionThin size={20} color="868e96" />,
        route: '/',
    },
    {
        id: 1,
        name: 'قیمت گذاری',
        icon: <PiCurrencyDollarSimpleLight size={20} color="868e96" />,
        route: '/',
    },
    {
        id: 2,
        name: 'خروج',
        icon: <PiSignOut size={20} color="868e96" />,
        route: '/',
    },
]

export default function Profile() {
    return (
        <li className="flex items-center">
            <HeaderDropdown>
                <HeaderDropdown.Thumbnail name="profile">
                    <div className="relative">
                        <img
                            src="images/avatars/001.png"
                            alt="avatar"
                            className="h-12 w-12 rounded-full border border-red-900"
                        />
                        <span className="absolute bottom-0 right-0 block h-3 w-3 animate-ping rounded-full border border-transparent bg-green-500 " />
                        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border border-transparent bg-green-600 " />
                    </div>
                </HeaderDropdown.Thumbnail>
                <HeaderDropdown.DropBox name="profile">
                    <div className="flex gap-4">
                        <img
                            src="images/avatars/001.png"
                            alt="avatar"
                            className="h-16 w-16 rounded-full border border-red-900"
                        />
                        <div className="flex flex-col justify-between text-right ">
                            <div className="flex items-center gap-3">
                                <p className="font-bold">صادق قاسم نژاد</p>
                                <Badge text={RolesEnum.Admin} />
                            </div>
                            <p className="text-sm text-gray-500">
                                ghasemnejad.sadegh@gmail.com
                            </p>
                        </div>
                    </div>
                    <Divider />
                    <ul className="flex flex-col">
                        {profileUtilsList.map((profile) => (
                            <li
                                key={profile.id}
                                className=" group rounded-lg transition-all hover:bg-red-100"
                            >
                                <Link
                                    to={profile.route}
                                    className="flex items-center gap-2 p-3 font-bold group-hover:text-red-700 [&>svg]:group-hover:stroke-red-600"
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
                    <ul className="flex flex-col">
                        {profileSettingList.map((profile) => (
                            <li
                                key={profile.id}
                                className=" group  rounded-lg transition-all hover:bg-red-100"
                            >
                                <Link
                                    to={profile.route}
                                    className="flex items-center gap-2 px-3 py-3 font-bold no-underline group-hover:text-red-700 [&>svg]:group-hover:fill-red-600"
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
