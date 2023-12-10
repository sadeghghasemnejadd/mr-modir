import ActiveOrders from '../../Features/Default/ActiveOrders'
import IncomeChart from '../../Features/Default/IncomeChart'
import LatestOrders from '../../Features/Default/LatestOrders'
import Seller from '../../Features/Default/Seller'

export default function Default() {
    return (
        <section className="grid grid-cols-2 gap-12">
            <ActiveOrders />
            <Seller />
            <IncomeChart />
            <LatestOrders />
        </section>
    )
}
