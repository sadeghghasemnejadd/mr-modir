import { ReactNode } from 'react'
import { PiChatCenteredDots } from 'react-icons/pi'
import ActivityTypeEnum from '../../../Enums/ActivityTypeEnum'

export interface IActivityData {
    id: number
    icon: ReactNode
    title: string
    author: string
    avatar: string
    date: Date
    activityType: ActivityTypeEnum
    content: ReactNode
}
const activityData: IActivityData[] = [
    {
        id: 0,
        icon: <PiChatCenteredDots />,
        title: 'ارسال چند سفارش به شیراز',
        author: 'صادق قاسم نژاد',
        avatar: 'images/avatars/001.png',
        date: new Date('2023-12-02T19:52:04.793Z'),
        activityType: ActivityTypeEnum.added,
        content: (
            <div className="flex-cols items-start gap-3 text-sm leading-9">
                <div className="flex-cols border-activity gap-3 rounded-lg px-4 py-2">
                    <p>خرید Samsung galaxy s24 ultra و Earbuds 2 pro</p>
                    <button
                        type="submit"
                        className="shadow-main self-end rounded-xl border-[1px] border-primary-600 px-4 py-2 text-xs text-primary-800 hover:bg-primary-600 hover:text-primary-50 dark:text-primary-100"
                    >
                        مشاهده پرداخت
                    </button>
                </div>
            </div>
        ),
    },
    {
        id: 1,
        icon: <PiChatCenteredDots />,
        title: 'ارسال چند سفارش به شیراز',
        author: 'صادق قاسم نژاد',
        avatar: 'images/avatars/001.png',
        date: new Date('2023-12-02T19:52:04.793Z'),
        activityType: ActivityTypeEnum.added,
        content: <p>hi</p>,
    },
]

export default activityData
