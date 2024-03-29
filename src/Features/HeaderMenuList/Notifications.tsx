import { MouseEvent, useState } from 'react'
import cx from 'classnames'

import HeaderDropdown from '../../ui/components/HeaderDropdown'
import Divider from '../../ui/components/Divider'
import notificationData from './data/notificitaionData'
import LogoStatusEnum from '../../Enums/logoStatusEnum'
import { getCalculatedDateAndTime } from '../../utils/calendar'
import ReadStatusEnum from '../../Enums/ReadStatusEnum'
import LinkButton from '../../ui/components/LinkButton'
import Icons from '../../icons/Icons'

export default function Notifications() {
    const [notifications, setNotifications] = useState(() => {
        const sortedNotification = notificationData.sort(
            (prevNotification, nextNotification) =>
                Number(nextNotification.date) - Number(prevNotification.date)
        )
        return sortedNotification
    })

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
                    <div className=" flex-center group relative transition-all [&>svg]:transition-none [&>svg]:hover:fill-primary-600 dark:[&>svg]:fill-primary-100 dark:[&>svg]:hover:fill-primary-500">
                        <span className="md:[&>svg]:size-8 [&>svg]:size-6">
                            <Icons name="bell" />
                        </span>
                        <span className="flex-center absolute -right-1 -top-2 h-[18px] w-[18px] rounded-full  bg-primary-600 text-[10px] text-primary-50 group-hover:animate-bounce dark:bg-primary-200 dark:text-primary-950 md:right-0 md:text-[11px]">
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
                    <div className="flex-v-center md:[&>svg];size-8  [&>svg]:size-6 justify-between dark:[&>svg]:fill-primary-50">
                        <Icons name="envelope-open-text" />
                        <p className="text-base-res">پیام ها</p>
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
                                        <div className="relative flex gap-2 p-1 md:gap-3 md:p-3">
                                            {notification.avatar && (
                                                <img
                                                    src={notification.avatar}
                                                    alt={notification.title}
                                                    className="md:size-12 size-10 rounded-full dark:bg-stone-500"
                                                />
                                            )}
                                            {notification.logo && (
                                                <span
                                                    className={cx(
                                                        'flex-center md:size-12 size-10 md:[&>svg]:size-6 [&>svg]:size-4 rounded-full',
                                                        notification.logoStatus ===
                                                            LogoStatusEnum.successful &&
                                                            'bg-green-500/30 dark:bg-green-900/30 [&>svg]:fill-green-700 dark:[&>svg]:fill-green-300',
                                                        notification.logoStatus ===
                                                            LogoStatusEnum.notify &&
                                                            'bg-blue-500/30 dark:bg-blue-900/30 [&>svg]:fill-blue-700 dark:[&>svg]:fill-blue-300',
                                                        notification.logoStatus ===
                                                            LogoStatusEnum.error &&
                                                            'bg-red-500/30 dark:bg-red-900/30 [&>svg]:fill-red-700 dark:[&>svg]:fill-red-300',
                                                        notification.logoStatus ===
                                                            LogoStatusEnum.warning &&
                                                            'bg-yellow-500/30 dark:bg-yellow-900/30 [&>svg]:fill-yellow-700 dark:[&>svg]:fill-yellow-300'
                                                    )}
                                                >
                                                    {notification.logo}
                                                </span>
                                            )}
                                            <div className="flex-cols gap-1">
                                                <h5 className="text-base-res font-bold">
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
                                                <span className="md:size-2 size-1 absolute left-3  top-3 block  rounded-full bg-primary-500" />
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
                                                <Icons name="xmark" size={20} />
                                            </span>
                                        </div>
                                        <Divider />
                                    </li>
                                ))}
                            </ul>
                            <LinkButton path="/">مشاهده همه پیام ها</LinkButton>
                        </>
                    )}
                </HeaderDropdown.DropBox>
            </HeaderDropdown>
        </li>
    )
}
