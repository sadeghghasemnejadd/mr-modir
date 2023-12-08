import DashboardsNameEnum from '../Enums/DashboardsNameEnum'

export interface INavBarItems {
    name: string
    label: string
    icon?: string
    badge?: number
    children?: INavBarItems[]
    route?: string
}
const navbarItems: INavBarItems[] = [
    {
        name: 'dashboard',
        label: 'داشبورد ها',
        icon: 'rectangles-mixed',
        children: [
            {
                name: DashboardsNameEnum.default,
                label: 'ساده',
                route: '/',
            },
            {
                name: DashboardsNameEnum.ecommerce,
                label: 'ایکامرس',
                route: '/ecommerce',
            },
            {
                name: DashboardsNameEnum.projects,
                label: 'پروژه',
                route: '/projects',
            },
            {
                name: DashboardsNameEnum.analytics,
                label: 'آنالیز',
                route: '/analytics',
            },
            {
                name: DashboardsNameEnum.crm,
                label: 'ارتباط با مشتری(crm)',
                route: '/crm',
            },
            {
                name: DashboardsNameEnum.crypto,
                label: 'ارز دیجیتال',
                route: '/crypto',
            },
        ],
    },
]

export default navbarItems
