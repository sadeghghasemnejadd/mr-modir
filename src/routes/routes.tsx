import DashboardsNameEnum from '../Enums/DashboardsNameEnum'
import Analytics from '../pages/Dashboards/Analytics'
import Crm from '../pages/Dashboards/Crm'
import Crypto from '../pages/Dashboards/Crypto'
import Default from '../pages/Dashboards/Default'
import Ecommerce from '../pages/Dashboards/Ecommerce'
import Projects from '../pages/Dashboards/Projects'

const routes = [
    // dashboards
    {
        id: 0,
        title: 'داشبورد ساده',
        name: DashboardsNameEnum.default,
        element: <Default />,
        route: '/',
    },
    {
        id: 1,
        title: 'داشبورد ایکامرس',
        name: DashboardsNameEnum.ecommerce,
        element: <Ecommerce />,
        route: '/ecommerce',
    },
    {
        id: 2,
        title: 'داشبورد پروژه',
        name: DashboardsNameEnum.projects,
        element: <Projects />,
        route: '/projects',
    },
    {
        id: 3,
        title: 'داشبورد آنالیز',
        name: DashboardsNameEnum.analytics,
        element: <Analytics />,
        route: '/analytics',
    },
    {
        id: 4,
        title: 'داشبورد crm',
        name: DashboardsNameEnum.crm,
        element: <Crm />,
        route: '/crm',
    },
    {
        id: 5,
        title: 'داشبورد ارز دیجیتال',
        name: DashboardsNameEnum.crypto,
        element: <Crypto />,
        route: '/crypto',
    },
]

export default routes
