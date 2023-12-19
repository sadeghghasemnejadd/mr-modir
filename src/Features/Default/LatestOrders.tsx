import { Link } from 'react-router-dom'
import cx from 'classnames'
import ActionButton from '../../ui/components/ActionButton'
import Card from '../../ui/components/Card'
import Icons from '../../icons/Icons'

const quickActionList = [
    { id: 0, name: 'مشاهده سفارشات', route: '/' },
    { id: 1, name: 'مشاهده مشتریان', route: '/' },
    { id: 1, name: 'مشاهده فروشندگان', route: '/' },
]
const actionLinkList = [
    { id: 0, name: 'گوشی Samsung galaxy s424 ultra', route: '/' },
    { id: 1, name: 'هدفون بیتس', route: '/' },
    { id: 1, name: 'فلش 24 گیگابایت', route: '/' },
]
export default function LatestOrders() {
    return (
        <div>
            <Card fixedHeight>
                <div className="flex-cols h-full justify-between">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-extrabold">
                            آخرین سفارشات
                        </h2>
                        <ActionButton name="latestOrder">
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
                    <div>
                        <ul className="text-sm">
                            {actionLinkList.map((linkItem, index) => (
                                <li
                                    key={linkItem.id}
                                    className={cx(
                                        'flex items-center justify-between border-b-2 border-dashed border-gray-300 py-3 dark:border-stone-600',
                                        index === actionLinkList.length - 1 &&
                                            'border-b-0 border-none !pb-0',
                                        index === 0 && '!pt-0'
                                    )}
                                >
                                    <p className="text-xs text-primary-500">
                                        {linkItem.name}
                                    </p>
                                    <Link
                                        className="[&>svg]:size-3 [&>svg]:duration-100 hover:[&>svg]:fill-primary-500"
                                        to={linkItem.route}
                                    >
                                        <Icons name="arrow-up-right-from-square" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Card>
        </div>
    )
}
