import cx from 'classnames'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import type { ChartData, ChartOptions, TooltipItem } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import IReduxStore from '../../Models/reduxStore'

ChartJS.register(ArcElement, Tooltip, Legend)

interface IPieChartProps {
    size?: string
    labels?: string[]
    labelBackgroundColor?: string[]
    label?: string
    dataValue: number[]
    position?: 'left' | 'right' | 'top' | 'bottom'
    callbackLabelFn?: (tem: TooltipItem<'doughnut'>) => string
}
export default function PieChart({
    size,
    labels,
    labelBackgroundColor,
    label,
    dataValue,
    position = 'top',
    callbackLabelFn,
}: IPieChartProps) {
    const { themeMode } = useSelector((state: IReduxStore) => state.theme)

    const data: ChartData<'doughnut'> = {
        labels,
        datasets: [
            {
                backgroundColor: labelBackgroundColor,
                label: label || 'Dataset 1',
                data: dataValue,
            },
        ],
    }
    const options: ChartOptions<'doughnut'> = {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                bodyFont: {
                    family: 'iransansfa',
                },
                titleFont: {
                    family: 'iransansfa',
                },
                rtl: true,
                boxPadding: 4,
                yAlign: 'bottom',
                displayColors: false,
                callbacks: {
                    label: (item: TooltipItem<'doughnut'>) => {
                        return callbackLabelFn?.(item) || item.parsed.toString()
                    },
                },
            },
            legend: {
                position,
                rtl: true,
                maxWidth: 100,
                labels: {
                    font: {
                        family: 'iransansfa',
                        size: 12,
                    },
                    boxWidth: 10,
                    color:
                        themeMode === 'dark' || themeMode === 'system'
                            ? '#fff'
                            : '#0c0a09',
                },
            },
        },
    }
    return (
        <div className={cx(size || 'size-48')}>
            <Doughnut data={data} options={options} />
        </div>
    )
}
