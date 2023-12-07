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
                name: 'default',
                label: 'ساده',
                route: '/',
            },
            {
                name: 'ecommerce',
                label: 'ایکامرس',
                route: '/ecommerce',
            },
            {
                name: 'projects',
                label: 'پروژه',
                route: '/projects',
            },
            {
                name: 'analytics',
                label: 'آنالیز',
                route: '/analytics',
            },
            {
                name: 'crm',
                label: 'ارتباط با مشتری(crm)',
                route: '/crm',
            },
            {
                name: 'crypto',
                label: 'ارز دیجیتال',
                route: '/crypto',
            },
        ],
    },
]

export default navbarItems
