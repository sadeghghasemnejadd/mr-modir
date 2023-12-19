// import cx from 'classnames'
import { Bubble } from 'react-chartjs-2'
import type { ChartData, ChartOptions, TooltipItem } from 'chart.js'
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js'
import { useSelector } from 'react-redux'
import IReduxStore from '../../Models/reduxStore'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

interface IBubbleChartProps {
    datasets: ChartData<'bubble'>['datasets']
    callbackLabelFn?: (tem: TooltipItem<'bubble'>) => string
}
export default function BubbleChart({
    datasets,
    callbackLabelFn,
}: IBubbleChartProps) {
    const { themeMode } = useSelector((state: IReduxStore) => state.theme)
    const data: ChartData<'bubble'> = {
        datasets,
    }

    const options: ChartOptions<'bubble'> = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1 / 2,
        scales: {
            x: {
                min: 0,
                max: 200,
                grid: {
                    display: false,
                    color:
                        themeMode === 'dark' || themeMode === 'system'
                            ? 'rgba(255,255,255,0.4)'
                            : 'rgba(0,0,0,0.4)',
                },
            },
            y: {
                min: 0,
                max: 500,
                grid: {
                    color:
                        themeMode === 'dark' || themeMode === 'system'
                            ? 'rgba(255,255,255,0.4)'
                            : 'rgba(0,0,0,0.4)',
                },
            },
        },
        plugins: {
            tooltip: {
                backgroundColor:
                    themeMode === 'dark' || themeMode === 'system'
                        ? '#fff'
                        : '#0c0a09',
                bodyColor:
                    themeMode === 'dark' || themeMode === 'system'
                        ? '#0c0a09'
                        : '#fff',
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
                    label: (item: TooltipItem<'bubble'>) => {
                        return (
                            callbackLabelFn?.(item) ||
                            String(item.parsed._custom)
                        )
                    },
                },
            },
            legend: {
                position: 'bottom',
                rtl: true,
                maxWidth: 1000,
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
                    padding: 30,
                },
            },
        },
    }
    return (
        <div className="h-96 w-full">
            <Bubble data={data} options={options} />
        </div>
    )
}
