import ActiveOrders from '../../Features/Default/ActiveOrders'

export default function Default() {
    return (
        <section className="grid grid-cols-2 gap-12">
            <ActiveOrders />
            <ActiveOrders />
        </section>
    )
}
