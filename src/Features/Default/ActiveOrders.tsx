import Card from '../../ui/components/Card'
import ProgressBar from '../../ui/components/ProgressBar'

export default function ActiveOrders() {
    return (
        <div>
            <Card
                fixedHeight
                backgroundUrl="images/abstract-bg.png"
                bgColor="main"
            >
                <div className="flex h-full flex-col justify-between">
                    <div>
                        <h2 className="text-title text-stone-200">34</h2>
                        <p className="text-sm text-stone-200">
                            سفارش های در حال انجام
                        </p>
                    </div>
                    <ProgressBar finished={34} total={50} hasPendingText />
                </div>
            </Card>
        </div>
    )
}
