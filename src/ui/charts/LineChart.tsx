import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

interface ILineChartProps<T> {
    labels: Array<T>
    data: number[]
    datasetColor?: string
}

export default function LineChart<T>({
    labels,
    data: dataChart,
    datasetColor,
}: ILineChartProps<T>) {
    // const { themeMode } = useSelector((state: IReduxStore) => state.theme)
    const data: ChartData<'line'> = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: dataChart,
                borderColor: datasetColor,
                backgroundColor: datasetColor,
                fill: false,
                cubicInterpolationMode: 'monotone',
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 0,
            },
        ],
    }

    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
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
        <div className="h-8 w-24">
            <Line data={data} options={options} />
        </div>
    )
}
