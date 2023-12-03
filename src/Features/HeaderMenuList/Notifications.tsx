import { MouseEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { PiBellSimple, PiEnvelopeOpen, PiX } from 'react-icons/pi'
import HeaderDropdown from '../../ui/components/HeaderDropdown'
import Divider from '../../ui/components/Divider'
import notificationData from './notificitaionData'
import LogoStatusEnum from '../../Enums/logoStatusEnum'
import { getCalculatedDateAndTime } from '../../utils/calendar'
import ReadStatusEnum from '../../Enums/ReadStatusEnum'

export default function Notifications() {
    const [notifications, setNotifications] = useState(notificationData)

    const handleRemoveNotifications = (id: number, event: MouseEvent) => {
        event.stopPropagation()
        setNotifications((notification) =>
            notification.filter((n) => n.id !== id)
        )
    }
    const handleReadNotification = (id: number) => {
        setNotifications((notification) =>
            notification.map((n) =>
                n.id === id ? { ...n, readStatus: ReadStatusEnum.read } : n
            )
        )
    }
    return (
        <li>
            <HeaderDropdown>
                <HeaderDropdown.Thumbnail name="notification">
                    <div className=" group relative transition-all [&>svg]:transition-none [&>svg]:hover:fill-primary-600 dark:[&>svg]:fill-primary-100 dark:[&>svg]:hover:fill-primary-500">
                        <PiBellSimple size="30" />
                        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-xs text-primary-50 group-hover:animate-bounce dark:bg-primary-200 dark:text-primary-950">
                            {
                                notifications.filter(
                                    (notif) =>
                                        notif.readStatus ===
                                        ReadStatusEnum.unRead
                                ).length
                            }
                        </span>
                    </div>
                </HeaderDropdown.Thumbnail>
                <HeaderDropdown.DropBox name="notification">
                    <div className="flex items-center justify-between  dark:[&>svg]:fill-primary-50">
                        <PiEnvelopeOpen size="30" />
                        <p>پیام ها</p>
                    </div>
                    <Divider />
                    {!notifications.length && (
                        <p className="text-center ">پیامی وجود ندارد!</p>
                    )}
                    {!!notifications.length && (
                        <>
                            <ul className="h-96 overflow-y-auto [&::-webkit-scrollbar]:hidden">
                                {notifications.map((notification) => (
                                    <li
                                        key={notification.id}
                                        className="group rounded-lg transition-all hover:bg-gray-200/50  dark:hover:bg-gray-700"
                                        onClick={() =>
                                            handleReadNotification(
                                                notification.id
                                            )
                                        }
                                        aria-hidden="true"
                                    >
                                        <div className="relative flex gap-3 p-3">
                                            {notification.avatar && (
                                                <img
                                                    src={notification.avatar}
                                                    alt={notification.title}
                                                    className="h-12 w-12 rounded-full dark:bg-slate-500"
                                                />
                                            )}
                                            {notification.logo && (
                                                <span
                                                    className={`flex h-12 w-12 items-center justify-center rounded-full [&>svg]:h-6 [&>svg]:w-6  ${
                                                        notification.logoStatus ===
                                                        LogoStatusEnum.successful
                                                            ? 'bg-green-500/30 dark:bg-green-900/30 [&>svg]:fill-green-700 dark:[&>svg]:fill-green-300'
                                                            : ''
                                                    }`}
                                                >
                                                    {notification.logo}
                                                </span>
                                            )}
                                            <div className="flex flex-col gap-1">
                                                <h5 className="font-bold">
                                                    {notification.title}
                                                </h5>
                                                <p className="max-w-[200px] text-xs leading-5">
                                                    {notification.message}
                                                </p>
                                                <p className="text-xs text-gray-400">
                                                    {getCalculatedDateAndTime(
                                                        notification.date
                                                    )}
                                                </p>
                                            </div>
                                            {notification.readStatus ===
                                                ReadStatusEnum.unRead && (
                                                <span className="absolute left-3 top-3  block h-2 w-2  rounded-full bg-primary-500" />
                                            )}
                                            <span
                                                className="absolute left-2 top-10 hidden cursor-pointer transition-all group-hover:block"
                                                onClick={(event) =>
                                                    handleRemoveNotifications(
                                                        notification.id,
                                                        event
                                                    )
                                                }
                                                aria-hidden="true"
                                            >
                                                <PiX />
                                            </span>
                                        </div>
                                        <Divider />
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to="/"
                                className="mt-3 block w-full rounded-lg py-3 text-center text-sm transition-all hover:bg-primary-100 hover:text-primary-500  dark:hover:bg-primary-800"
                            >
                                مشاهده همه پیام ها
                            </Link>
                        </>
                    )}
                </HeaderDropdown.DropBox>
            </HeaderDropdown>
        </li>
    )
}
