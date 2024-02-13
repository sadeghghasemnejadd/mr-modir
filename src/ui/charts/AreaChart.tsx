// import cx from 'classnames'
import type { ChartData, ChartOptions } from 'chart.js'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import IReduxStore from '../../Models/reduxStore'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
)

interface IAreaChartProps {
    datasets: ChartData<'line'>['datasets']
    labels: ChartData<'line'>['labels']
}
export default function AreaChart({ datasets, labels }: IAreaChartProps) {
    const { themeMode } = useSelector((state: IReduxStore) => state.theme)
    const data: ChartData<'line'> = {
        labels,
        datasets,
    }

    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1 / 2,
        scales: {
            x: {
                min: 0,
                max: 2000,
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
                max: 1000,
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
                enabled: false,
            },
            legend: {
                display: false,
            },
        },
    }
    return (
        <div className="h-96 w-full">
            <Line data={data} options={options} />
        </div>
    )
}
