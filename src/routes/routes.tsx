import DashboardsNameEnum from '../Enums/DashboardsNameEnum'
import Analytics from '../pages/Dashborads/Analytics'
import Crm from '../pages/Dashborads/Crm'
import Crypto from '../pages/Dashborads/Crypto'
import Default from '../pages/Dashborads/Default'
import Ecommerce from '../pages/Dashborads/Ecommerce'
import Projects from '../pages/Dashborads/Projects'

const routes = [
    // dashboards
    {
        id: 0,
        title: 'default-dashboard',
        name: DashboardsNameEnum.default,
        element: <Default />,
        route: '/',
    },
    {
        id: 1,
        title: 'ecommerce-dashboard',
        name: DashboardsNameEnum.ecommerce,
        element: <Ecommerce />,
        route: '/ecommerce',
    },
    {
        id: 2,
        title: 'projects-dashboard',
        name: DashboardsNameEnum.projects,
        element: <Projects />,
        route: '/projects',
    },
    {
        id: 3,
        title: 'analytics-dashboard',
        name: DashboardsNameEnum.analytics,
        element: <Analytics />,
        route: '/analytics',
    },
    {
        id: 4,
        title: 'crm-dashboard',
        name: DashboardsNameEnum.crm,
        element: <Crm />,
        route: '/crm',
    },
    {
        id: 5,
        title: 'crypto-dashboard',
        name: DashboardsNameEnum.crypto,
        element: <Crypto />,
        route: '/crypto',
    },
]

export default routes
