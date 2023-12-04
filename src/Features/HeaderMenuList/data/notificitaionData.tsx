import { ReactNode } from 'react'
import { PiConfettiBold, PiWarning, PiWarningCircle } from 'react-icons/pi'
import { BsExclamation } from 'react-icons/bs'
import ReadStatusEnum from '../../../Enums/ReadStatusEnum'
import LogoStatusEnum from '../../../Enums/logoStatusEnum'

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
    {
        id: 2,
        avatar: 'images/avatars/006.png',
        title: 'درخواست دوست شدن',
        message: 'شما یک درخواست دوستی جدید از طرف کوروش دارید',
        readStatus: ReadStatusEnum.read,
        date: new Date('2023-12-02T04:52:04.793Z'),
    },
    {
        id: 3,
        avatar: 'images/avatars/007.png',
        title: 'تبریک! پروژه شما با موفقیت انجام شد',
        message:
            'سلام، ما خوشحالیم که به شما اطلاع می‌دهیم که پروژه‌ی شما با موفقیت به پایان رسیده است. امیدواریم که نتیجه‌ی کار شما به انتظارات شما برسد',
        readStatus: ReadStatusEnum.unRead,
        date: new Date('2023-11-02T04:52:04.793Z'),
    },
    {
        id: 4,
        logo: <PiWarning />,
        title: 'به روز رسانی سیستم',
        message:
            'سلام، ما به روز رسانی جدیدی از سیستم ایجاد کرده‌ایم. لطفاً از تغییرات جدید مطلع شده و نظرات خود را با ما در میان بگذارید',
        readStatus: ReadStatusEnum.read,
        date: new Date('2023-10-28T09:52:04.793Z'),
        logoStatus: LogoStatusEnum.warning,
    },
    {
        id: 5,
        logo: <BsExclamation />,
        title: 'تعطیلی دفتر در روزهای آتی',
        message:
            'با سلام، به اطلاع می‌رسانیم که دفتر ما در روزهای ۱۵ و ۱۶ اسفند به دلیل تعطیلات عید نوروز تعطیل می‌باشد. با تشکر از درک شما',
        readStatus: ReadStatusEnum.read,
        date: new Date('2023-10-28T09:52:04.793Z'),
        logoStatus: LogoStatusEnum.notify,
    },
    {
        id: 6,
        logo: <PiWarningCircle />,
        title: 'اخطار! سامانه به خطر افتاده است',
        message:
            'لطفاً توجه داشته باشید که سامانه در معرض خطر قرار گرفته است. لطفاً به طور فوری تغییرات لازم را انجام دهید تا مشکلات بیشتری به وجود نیاید.',
        readStatus: ReadStatusEnum.unRead,
        date: new Date('2023-10-28T09:52:04.793Z'),
        logoStatus: LogoStatusEnum.error,
    },
]

export default notificationData
