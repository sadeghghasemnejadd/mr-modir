import { ReactNode } from 'react'
import ActivityTypeEnum from '../../../Enums/ActivityTypeEnum'
import Button from '../../../ui/components/Button'
import Icons from '../../../icons/Icons'

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
        icon: <Icons name="messages" />,
        title: 'ارسال چند سفارش به شیراز',
        author: 'صادق قاسم نژاد',
        avatar: 'images/avatars/001.png',
        date: new Date('2023-12-02T19:52:04.793Z'),
        activityType: ActivityTypeEnum.added,
        content: (
            <div className="flex-cols items-start gap-3 text-sm leading-9">
                <div className="flex-cols border-activity gap-3 rounded-lg px-2 py-2 md:px-4">
                    <p className="text-base-res leading-5">
                        خرید Samsung galaxy s24 ultra و Earbuds 2 pro
                    </p>
                    <Button>مشاهده پرداخت</Button>
                </div>
            </div>
        ),
    },
    {
        id: 1,
        icon: <Icons name="user" />,
        title: 'دو کاربر جدید ثبت نام کردند',
        author: 'مهسا امینی',
        avatar: 'images/avatars/007.png',
        date: new Date('2023-12-02T18:52:04.793Z'),
        activityType: ActivityTypeEnum.initiated,
        content: (
            <div className="grid gap-3 md:flex md:gap-6">
                <div className="flex-center border-activity gap-3 rounded-lg px-4 py-2">
                    <img
                        src="images/avatars/008.png"
                        alt="user8"
                        className="avatar md:size-8 size-6"
                    />
                    <p className="text-base-res">زهرا امینی</p>
                </div>
                <div className="flex-center border-activity gap-3 rounded-lg px-4 py-2">
                    <img
                        src="images/avatars/009.png"
                        alt="user8"
                        className="avatar md:size-8 size-6"
                    />
                    <p className="text-base-res">ماهک عزیزان</p>
                </div>
            </div>
        ),
    },
    {
        id: 2,
        icon: <Icons name="notebook" />,
        title: 'پروژه آقای مدیر انجام شده',
        author: 'امیرحسین لدنی',
        avatar: 'images/avatars/010.png',
        date: new Date('2023-12-02T17:52:04.793Z'),
        activityType: ActivityTypeEnum.placed,
        content: (
            <div className="flex-cols border-activity gap-3 rounded-lg px-4 py-2">
                <q className="text-base-res">
                    جناب مدیر بالاخره پروژه رو انجام دادم !
                </q>
                <Button>مشاهده پروژه</Button>
            </div>
        ),
    },
]

export default activityData
