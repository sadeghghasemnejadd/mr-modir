import Card from '../../ui/components/Card'
import SmallAvatars from '../../ui/components/SmallAvatars'
import sellerData from './data/sellerData'

export default function Seller() {
    return (
        <div>
            <Card fixedHeight>
                <div className="flex h-full flex-col justify-between">
                    <div>
                        <h2 className="text-title">342</h2>
                        <p className="text-sm text-stone-600 dark:text-stone-300">
                            فروشنده فعال
                        </p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-sm text-stone-600 dark:text-stone-300">
                            برترین فروشندگان امروز
                        </p>
                        <SmallAvatars avatarsArray={sellerData} />
                    </div>
                </div>
            </Card>
        </div>
    )
}
