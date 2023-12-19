import ActiveOrders from '../../Features/Default/ActiveOrders'
import BestAuthors from '../../Features/Default/BestAuthors'
import IncomeChart from '../../Features/Default/IncomeChart'
import LatestOrders from '../../Features/Default/LatestOrders'
import PerformanceOverview from '../../Features/Default/PerformanceOverview'
import Seller from '../../Features/Default/Seller'
import UpgradePro from '../../Features/Default/UpgradePro/UpgradePro'

export default function Default() {
    return (
        <section className="grid grid-cols-2 gap-12">
            <ActiveOrders />
            <Seller />
            <IncomeChart />
            <LatestOrders />
            <UpgradePro />
            <PerformanceOverview />
            <BestAuthors />
        </section>
    )
}
