import { ReactNode } from 'react'
import { PiConfettiBold } from 'react-icons/pi'
import ReadStatusEnum from '../../Enums/ReadStatusEnum'
import LogoStatusEnum from '../../Enums/logoStatusEnum'

interface INotificationData {
    id: number
    avatar?: string
    title: string
    message: string
    readStatus: ReadStatusEnum
    date: Date
    logo?: ReactNode
    logoStatus?: LogoStatusEnum
}

const notificationData: INotificationData[] = [
    {
        id: 0,
        avatar: 'images/avatars/002.png',
        title: 'ارتقا رتبه!',
        message: 'تبریک میگم رتبه شما از 4 به 3 رسید.',
        readStatus: ReadStatusEnum.read,
        date: new Date('2023-12-02T04:52:04.793Z'),
    },
    {
        id: 1,
        logo: <PiConfettiBold />,
        title: 'سفارش جدید!',
        message: 'سما پروژه جدیدی از طرف مهسا امینی دریافت کرده اید!.',
        readStatus: ReadStatusEnum.unRead,
        date: new Date('2023-11-28T09:52:04.793Z'),
        logoStatus: LogoStatusEnum.successful,
    },
]

export default notificationData
