import cx from 'classnames'
// import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker'
// import { pickersLayoutClasses } from '@mui/x-date-pickers/PickersLayout'
// import { LocalizationProvider } from '@mui/x-date-pickers'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { faIR } from '@mui/material/locale'

type CalendarFilter =
    | 'today'
    | 'yesterday'
    | 'last7day'
    | 'last30day'
    | 'thisMonth'
    | 'lastMonth'
interface ICalendarOptionProps {
    onClick?: () => void
    onSelectFilter: (filter: CalendarFilter) => void
    selectedDateFilter: CalendarFilter
}
interface ICalendarData {
    id: number
    name: CalendarFilter
    label: string
}
const calendarData: ICalendarData[] = [
    {
        id: 0,
        name: 'today',
        label: 'امروز',
    },
    {
        id: 1,
        name: 'yesterday',
        label: 'دیروز',
    },
    {
        id: 2,
        name: 'last7day',
        label: '7 روز گذشته',
    },
    {
        id: 3,
        name: 'last30day',
        label: '30 روز گذشته',
    },
    {
        id: 4,
        name: 'thisMonth',
        label: 'این ماه',
    },
    {
        id: 5,
        name: 'lastMonth',
        label: 'ماه گذشته',
    },
]
export default function CalendarOption({
    onClick: handleCloseMenu,
    onSelectFilter,
    selectedDateFilter,
}: ICalendarOptionProps) {
    // const [startDate, setStartDate] = useState<Date | null>(new Date())
    // const [endDate, setEndDate] = useState<Date | null>(new Date())
    const handleSelectFilter = (filter: CalendarFilter) => {
        onSelectFilter(filter)
        handleCloseMenu?.()
    }
    // const handleChangeDate = ([newStartDate, newEndDate]: [Date, Date]) => {
    //     setStartDate(newStartDate)
    //     setEndDate(newEndDate)
    // }
    return (
        <div className="flex">
            <ul className="w-full flex-1">
                {calendarData.map((date) => (
                    <li
                        key={date.id}
                        className={cx(
                            'cursor-pointer whitespace-nowrap rounded-lg px-3 py-2 text-xs transition-none hover:bg-primary-100 hover:text-primary-950 dark:hover:bg-primary-800 dark:hover:text-primary-50',
                            selectedDateFilter === date.name &&
                                '!bg-primary-100 !text-primary-950 dark:!bg-primary-800 dark:!text-primary-50'
                        )}
                        aria-hidden="true"
                        onClick={() => handleSelectFilter(date.name)}
                    >
                        {date.label}
                    </li>
                ))}
            </ul>
            {/* {selectedDateFilter === 'custom' && (
                <div className="h-full w-full">
                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale={faIR}
                    >
                        <StaticDateRangePicker
                            sx={{
                                [`.${pickersLayoutClasses.contentWrapper}`]: {
                                    alignItems: 'center',
                                },
                            }}
                        />
                    </LocalizationProvider>
                </div>
            )} */}
        </div>
    )
}
