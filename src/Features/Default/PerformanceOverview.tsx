import { useState } from 'react'
import cx from 'classnames'
import Card from '../../ui/components/Card'
import getCurrency from '../../utils/currency'
import Badge from '../../ui/components/Badge'
import BubbleChart from '../../ui/charts/BubbleChart'
import colorsData from '../../utils/colorsData'

type Duration = 'monthly' | 'weekly'

const datasets = [
    {
        backgroundColor: colorsData.blue[400],
        label: 'تلویزیون',
        data: [{ x: 120, y: 100, r: 30 }],
    },
    {
        backgroundColor: colorsData.green[300],
        label: 'اینستاگرام',
        data: [{ x: 130, y: 200, r: 25 }],
    },
    {
        backgroundColor: colorsData.red[600],
        label: 'لینکدین',
        data: [{ x: 140, y: 300, r: 20 }],
    },
    {
        backgroundColor: colorsData.orange[500],
        label: 'رادیو',
        data: [{ x: 150, y: 400, r: 30 }],
    },
    {
        backgroundColor: colorsData.purple[500],
        label: 'مجله',
        data: [{ x: 160, y: 200, r: 30 }],
    },
]

export default function PerformanceOverview() {
    const [activeDuration, setActiveDuration] = useState<Duration>('weekly')

    const handleChangeActiveDuration = (selected: Duration) => {
        setActiveDuration(selected)
    }
    return (
        <div className="col-[1/-1]">
            <Card>
                <div className="flex-cols gap-6">
                    <div className="flex items-center justify-between">
                        <div className="flex-cols gap-1">
                            <h2 className="text-xl font-bold">
                                خلاصه فروش از طریق تبلیغات
                            </h2>
                            <p className="text-mute">تمامی کاربران</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <p
                                className={cx(
                                    'cursor-pointer rounded-lg px-4 py-2',
                                    activeDuration === 'monthly' &&
                                        'bg-slate-200 font-bold dark:bg-slate-600'
                                )}
                                aria-hidden="true"
                                onClick={() =>
                                    handleChangeActiveDuration('monthly')
                                }
                            >
                                ماه
                            </p>
                            <p
                                className={cx(
                                    'cursor-pointer rounded-lg px-4 py-2',
                                    activeDuration === 'weekly' &&
                                        'bg-slate-200 font-bold dark:bg-slate-600'
                                )}
                                aria-hidden="true"
                                onClick={() =>
                                    handleChangeActiveDuration('weekly')
                                }
                            >
                                هفته
                            </p>
                        </div>
                    </div>
                    <div className="flex-cols gap-1">
                        <div className="flex gap-2 text-xl font-bold">
                            <p>{getCurrency(352_000)}</p>
                            <Badge
                                text="1.2%"
                                size="xs"
                                icon="arrow-up"
                                textColor="success"
                                color="main"
                            />
                        </div>
                        <p className="text-mute">
                            میانگین فروش از طریق تبلیغات
                        </p>
                    </div>
                    <div>
                        <BubbleChart datasets={datasets} />
                    </div>
                </div>
            </Card>
        </div>
    )
}
