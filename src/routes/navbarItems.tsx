import { ReactNode } from 'react'
import { PiHouse } from 'react-icons/pi'

export interface INavBarItems {
    name: string
    label: string
    icon?: ReactNode
    badge?: number
    children?: INavBarItems[]
    route?: string
}
const navbarItems: INavBarItems[] = [
    {
        name: 'dashboard',
        label: 'داشبورد ها',
        icon: <PiHouse />,
        // badge: 5,
        children: [
            {
                name: 'default',
                label: 'ساده',
                children: [
                    {
                        name: 'default2',
                        label: 'ساده2',
                        children: [
                            {
                                name: 'default3',
                                label: '3ساده',
                                children: [
                                    {
                                        name: 'default4',
                                        label: '3ساده',
                                        route: '/',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'default5',
                label: 'ساده5',
                children: [
                    {
                        name: 'default6',
                        label: '6ساده',
                        children: [
                            {
                                name: 'default7',
                                label: '7ساده',
                                route: '/',
                            },
                        ],
                    },
                ],
            },
        ],
    },
]

export default navbarItems
