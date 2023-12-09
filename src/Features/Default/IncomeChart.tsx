import type { TooltipItem } from 'chart.js'
import PieChart from '../../ui/charts/PieChart'
import Badge from '../../ui/components/Badge'
import Card from '../../ui/components/Card'
import getCurrency from '../../utils/currency'

export default function IncomeChart() {
    const callbackItemLabel = (item: TooltipItem<'doughnut'>) => {
        return getCurrency(item.parsed)
    }
    return (
        <div>
            <Card fixedHeight>
                <div className="flex-cols h-full justify-between">
                    <div>
                        <div className="flex-v-center gap-3">
                            <h2 className="text-2xl font-extrabold">
                                {getCurrency(252_000)}
                            </h2>
                            <Badge
                                text="4.2%"
                                size="xs"
                                color="main"
                                textColor="success"
                                icon="arrow-up"
                            />
                        </div>
                        <p className="text-sm text-stone-600 dark:text-stone-300">
                            درآمد شما در ماه فروردین
                        </p>
                    </div>
                    <div>
                        <PieChart
                            labels={['فروش داخلی', 'فروش خارجی', 'سایر']}
                            labelBackgroundColor={[
                                '#c2410c',
                                '#1e40af',
                                '#581c87',
                            ]}
                            label="income"
                            dataValue={[75_000, 150_000, 27_000]}
                            position="left"
                            callbackLabelFn={callbackItemLabel}
                        />
                    </div>
                </div>
            </Card>
        </div>
    )
}
