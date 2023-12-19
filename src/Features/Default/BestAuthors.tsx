import { useState } from 'react'
import { createColumnHelper, type ColumnDef } from '@tanstack/react-table'
import { faker } from '@faker-js/faker'
import ActionButton from '../../ui/components/ActionButton'
import Card from '../../ui/components/Card'
import IconButton from '../../ui/components/IconButton'
import Table from '../../ui/components/Table'
import {
    IBestAuthors,
    cryptoBestAuthor,
    internetBestAuthor,
    natureBestAuthor,
    othersBestAuthor,
    socialBestAuthor,
} from './data/bestAuthor'
import LineChart from '../../ui/charts/LineChart'
import Icons from '../../icons/Icons'

type Author = {
    id: number
    author: IBestAuthors['author']
    conv: number
    chart: IBestAuthors['chart']
}

const quickActionList = [
    { id: 0, name: 'مشاهده مقالات', route: '/' },
    { id: 1, name: 'مشاهده نویسندگان', route: '/' },
    { id: 1, name: 'مشاهده برترین نویسندگان', route: '/' },
]

const filterList = [
    { id: 0, name: 'اینترنت', icon: 'globe' },
    { id: 1, name: 'طبیعت', icon: 'flower-tulip' },
    { id: 2, name: 'ارز دیجیتال', icon: 'bitcoin-sign' },
    { id: 3, name: 'شبکه های مجازی', icon: 'thumbs-up' },
    { id: 4, name: 'سایر موارد', icon: 'paper-plane-top' },
]

const chartLabels = Array.from({ length: 20 }, (_, index) => index)

const columnHelper = createColumnHelper<Author>()
const columns: ColumnDef<Author, string & number>[] = [
    columnHelper.accessor('author', {
        cell: (info) => {
            const authorValue: IBestAuthors['author'] = info.getValue()
            return (
                <div className="flex items-center gap-3">
                    <img
                        src={authorValue.avatar}
                        alt={authorValue.name}
                        className="avatar size-12"
                    />
                    <div>
                        <h2 className="text-xs font-bold">
                            {authorValue.name}
                        </h2>
                        <p className="text-mute text-xs">
                            {authorValue.country}
                        </p>
                    </div>
                </div>
            )
        },
        header: () => (
            <span className="text-mute flex justify-start text-sm">
                نویسنده
            </span>
        ),
        size: 80,
    }),
    columnHelper.accessor('conv', {
        cell: (info) => {
            const convValue: IBestAuthors['conv'] = info.getValue()
            return <p className="text-center text-xs">{convValue}%</p>
        },
        header: () => (
            <span className="text-mute text-sm">نرخ ارسال مقاله</span>
        ),
    }),
    columnHelper.accessor('chart', {
        cell: (info) => {
            const chartValue: IBestAuthors['chart'] = info.getValue()
            return (
                <div>
                    <LineChart
                        labels={chartLabels}
                        data={chartLabels.map(() =>
                            faker.datatype.number({ min: -1000, max: 1000 })
                        )}
                        datasetColor={chartValue.color}
                    />
                </div>
            )
        },
        header: () => <span className="text-mute text-sm">نمودار</span>,
    }),
    columnHelper.accessor('id', {
        cell: () => {
            return (
                <div className="flex-center">
                    <button className="flex-center self-center rounded-lg bg-slate-200 p-1.5 dark:bg-slate-600">
                        <span className="[&>svg]:size-3">
                            <Icons name="arrow-left" />
                        </span>
                    </button>
                </div>
            )
        },
        header: () => <span className="text-mute text-sm">مشاهده</span>,
    }),
]

export default function BestAuthors() {
    const [activeFilter, setActiveFilter] = useState<number>(0)

    const handleChangeFilter = (id: number) => {
        setActiveFilter(id)
    }

    const renderTable = () => {
        switch (activeFilter) {
            case 0:
                return (
                    <Table
                        columns={columns}
                        data={internetBestAuthor}
                        key="internet"
                    />
                )
            case 1:
                return (
                    <Table
                        columns={columns}
                        data={natureBestAuthor}
                        key="nature"
                    />
                )
            case 2:
                return (
                    <Table
                        columns={columns}
                        data={cryptoBestAuthor}
                        key="crypto"
                    />
                )
            case 3:
                return (
                    <Table
                        columns={columns}
                        data={socialBestAuthor}
                        key="social"
                    />
                )
            case 4:
                return (
                    <Table
                        columns={columns}
                        data={othersBestAuthor}
                        key="other"
                    />
                )
            default:
                return (
                    <Table
                        columns={columns}
                        data={internetBestAuthor}
                        key="internet"
                    />
                )
        }
    }

    return (
        <div>
            <Card>
                <div className="flex-cols gap-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="font-bold">برترین نویسندگان</h2>
                            <p className="text-mute">
                                23.2% میانگین مقاله در روز
                            </p>
                        </div>
                        <ActionButton name="bestAuthor">
                            <ActionButton.Header>
                                <p className="text-xs font-bold">عملیات سریع</p>
                            </ActionButton.Header>
                            <ActionButton.Body>
                                <ul className="flex-cols px-3 py-3 text-xs">
                                    {quickActionList.map((action) => (
                                        <li
                                            key={action.id}
                                            className="cursor-pointer rounded-lg px-3 py-2 transition-none hover:bg-primary-100 hover:text-primary-950 dark:hover:bg-primary-800 dark:hover:text-primary-50"
                                        >
                                            {action.name}
                                        </li>
                                    ))}
                                </ul>
                            </ActionButton.Body>
                        </ActionButton>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {filterList.map((filter) => (
                            <IconButton
                                id={filter.id}
                                key={filter.id}
                                icon={filter.icon}
                                name={filter.name}
                                activeFilter={activeFilter}
                                onClickHandler={handleChangeFilter}
                            />
                        ))}
                    </div>
                    <div className="w-full overflow-x-auto">
                        {renderTable()}
                    </div>
                </div>
            </Card>
        </div>
    )
}
