import { useState } from 'react'
import { endOfMonth, startOfMonth, sub, subDays } from 'date-fns-jalali'
import { faker } from '@faker-js/faker'
import Icons from '../../../icons/Icons'
import ActionButton from '../../../ui/components/ActionButton'
import Card from '../../../ui/components/Card'
import { getLocaleDate } from '../../../utils/calendar'
import CalendarOption from './CalendarOption'
import AreaChart from '../../../ui/charts/AreaChart'
import colorsData from '../../../utils/colorsData'

type CalendarFilter =
    | 'today'
    | 'yesterday'
    | 'last7day'
    | 'last30day'
    | 'thisMonth'
    | 'lastMonth'

const areaChartLabels = ['9', '12', '15', '18', '19']
const renderData = () =>
    areaChartLabels.map(() => faker.datatype.number({ min: 0, max: 1000 }))
export default function Support() {
    const [dateFilter, setDateFilter] = useState<CalendarFilter>('today')

    const areaChartDatasets = [
        {
            fill: {
                target: 'origin', // Set the fill options
                above: 'rgba(255, 255, 0, 0.3)',
            },
            data: renderData(),
            backgroundColor: colorsData.blue['500'],
        },
        {
            fill: {
                target: 'origin', // Set the fill options
                above: 'rgba(255, 0, 0, 0.3)',
            },
            data: renderData(),
            backgroundColor: colorsData.green['500'],
        },
    ]
    const handleSelectFilter = (filter: CalendarFilter) => {
        setDateFilter(filter)
    }
    const calculateLabel = () => {
        const lastMonth = sub(new Date(), { months: 1 })
        switch (dateFilter) {
            case 'today':
                return getLocaleDate(new Date())
            case 'yesterday':
                return getLocaleDate(subDays(new Date(), 1))
            case 'last7day':
                return getLocaleDate(subDays(new Date(), 7))
            case 'last30day':
                return getLocaleDate(subDays(new Date(), 30))
            case 'thisMonth':
                return `${getLocaleDate(
                    startOfMonth(new Date())
                )} - ${getLocaleDate(new Date())}`
            case 'lastMonth':
                return `${getLocaleDate(
                    startOfMonth(lastMonth)
                )} - ${getLocaleDate(endOfMonth(lastMonth))}`
            default:
                return ''
        }
    }
    const renderThumbnail = () => {
        return (
            <div className="flex items-center gap-3">
                <p className="text-sm">{calculateLabel()}</p>
                <span className="[&>svg]:size-4 [&>svg]:fill-slate-500">
                    <Icons name="calendar" />
                </span>
            </div>
        )
    }
    return (
        <div>
            <Card>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                        <div className="flex-cols gap-2">
                            <h2 className="text-title">پشتیبانی</h2>
                            <p className="text-mute">2024 تماس</p>
                        </div>
                        <ActionButton
                            name="support-calendar"
                            thumbnail={renderThumbnail()}
                            color="secondary"
                            fixedWidth={false}
                        >
                            <ActionButton.Body>
                                <CalendarOption
                                    onSelectFilter={handleSelectFilter}
                                    selectedDateFilter={dateFilter}
                                />
                            </ActionButton.Body>
                        </ActionButton>
                    </div>
                    <div>
                        <AreaChart
                            datasets={areaChartDatasets}
                            labels={areaChartLabels}
                            key={dateFilter}
                        />
                    </div>
                </div>
            </Card>
        </div>
    )
}
