import Drawer from '../../ui/components/Drawer'
import activityData, { IActivityData } from './data/activityData'
import { translateActivityType } from '../../utils/translate'
import { getLocaleHours } from '../../utils/calendar'
import Tooltip from '../../ui/components/Tooltip'
import TooltipDirectionEnum from '../../Enums/TooltipDiectionEnum'
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
                        className="avatar h-6 w-6"
                    />
                </Tooltip>
            </div>
        )
    }
    return (
        <li>
            <Drawer direction="left">
                <Drawer.Thumbnail name="activity">
                    <span className="flex-center svg-duration-100 [&>svg]:hover:fill-primary-500">
                        <Icons name="clock-rotate-left" size={30} />
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
                        <span className="border-activity absolute right-6 top-0 block h-full" />
                        <div className="flex-cols gap-12">
                            {activityData.map((activity) => (
                                <div
                                    key={activity.id}
                                    className="flex justify-between gap-6"
                                >
                                    <span className="flex-center bg-main border-activity z-10 h-12 w-12 rounded-full [&>svg]:h-5 [&>svg]:w-5">
                                        {activity.icon}
                                    </span>
                                    <div className="flex-cols flex-1 gap-3">
                                        <h3 className="break-all font-bold">
                                            {activity.title}
                                        </h3>
                                        {generateActivitySubTitle(activity)}
                                        <div>{activity.content}</div>
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
