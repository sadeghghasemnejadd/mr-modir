import Drawer from '../../ui/components/Drawer'
import activityData, { IActivityData } from './data/activityData'
import { translateActivityType } from '../../utils/translate'
import { getLocaleHours } from '../../utils/calendar'
import Tooltip from '../../ui/components/Tooltip'
import TooltipDirectionEnum from '../../Enums/TooltipDirectionEnum'
import Icons from '../../icons/Icons'

export default function Activity() {
    const generateActivitySubTitle = (activity: IActivityData) => {
        const activityType = translateActivityType(activity.activityType)
        const date = getLocaleHours(activity.date)
        return (
            <div className="flex-v-center gap-1 text-xs tracking-wider text-gray-400">
                <p>
                    {activityType} در {date} توسط{' '}
                </p>
                <Tooltip
                    text={activity.author}
                    direction={TooltipDirectionEnum.left}
                >
                    <img
                        src={activity.avatar}
                        alt={activity.author}
                        className="avatar md:size-6 size-4"
                    />
                </Tooltip>
            </div>
        )
    }
    return (
        <li>
            <Drawer direction="left">
                <Drawer.Thumbnail name="activity">
                    <span className="flex-center svg-duration-100 md:[&>svg]:size-8 [&>svg]:size-6 [&>svg]:hover:fill-primary-500">
                        <Icons name="clock-rotate-left" />
                    </span>
                </Drawer.Thumbnail>
                <Drawer.Box
                    name="activity"
                    title="آخرین فعالیت ها"
                    footerButtonOption={{
                        path: '/',
                        children: 'مشاهده همه فعالیت ها',
                    }}
                >
                    <div className="relative">
                        <span className="border-activity absolute right-4 top-0 block h-full md:right-6" />
                        <div className="flex-cols gap-10 overflow-hidden md:gap-12">
                            {activityData.map((activity) => (
                                <div
                                    key={activity.id}
                                    className="flex-row-between gap-3 md:gap-6"
                                >
                                    <span className="flex-center bg-main border-activity md:[&>svg]:size-5 [&>svg]:size-3 md:size-12 size-8 z-10 rounded-full">
                                        {activity.icon}
                                    </span>
                                    <div className="flex-cols flex-1 gap-2 md:gap-3">
                                        <h3 className="text-base-res break-all font-bold">
                                            {activity.title}
                                        </h3>
                                        {generateActivitySubTitle(activity)}
                                        <div className="">
                                            {activity.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Drawer.Box>
            </Drawer>
        </li>
    )
}
