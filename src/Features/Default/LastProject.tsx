import Icons from '../../icons/Icons'
import Badge from '../../ui/components/Badge'
import Card from '../../ui/components/Card'
import LinkButton from '../../ui/components/LinkButton'
import SmallAvatars, { IAvatar } from '../../ui/components/SmallAvatars'
import { getLocaleDate } from '../../utils/calendar'
import getCurrency from '../../utils/currency'

const lastProjectTeamsData: IAvatar[] = [
    { id: 0, name: 'صادق قاسم نژاد', url: 'images/avatars/001.png' },
    { id: 1, name: 'امیرحسین لدنی', url: 'images/avatars/002.png' },
    { id: 2, name: 'رضا نوری', url: 'images/avatars/004.png' },
    { id: 3, name: 'مهسا امینی', url: 'images/avatars/005.png' },
]
export default function LastProject() {
    return (
        <div className="col-[-1/1]">
            <Card>
                <div className="flex gap-6">
                    <div className="w-2/5 overflow-hidden rounded-lg">
                        <img
                            src="images/annie-spratt.webp"
                            alt="group"
                            className="aspect-video h-full w-full"
                        />
                    </div>
                    <div className="flex-cols w-full gap-12">
                        <div className="flex items-center justify-between">
                            <div className="flex-cols gap-2">
                                <p className="text-mute">اخرین پروژه</p>
                                <h2 className="text-2xl">4 نفره</h2>
                            </div>
                            <Badge
                                text="در حال انجام"
                                color="primary"
                                size="sm"
                            />
                        </div>
                        <div className="flex gap-14">
                            <div className="flex items-center gap-2">
                                <img
                                    src="images/avatars/001.png"
                                    alt="manager"
                                    className="size-8 avatar"
                                />
                                <span>
                                    <p className="text-mute text-xs">
                                        مدیر پروژه
                                    </p>
                                    <p className="text-xs font-bold">
                                        محمد صادق قاسم نژاد
                                    </p>
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="size-8 flex-center rounded-full bg-green-600 p-3">
                                    <span className=" [&>svg]:size-4  [&>svg]:fill-slate-100">
                                        <Icons name="sack-dollar" />
                                    </span>
                                </div>

                                <span>
                                    <p className="text-mute text-xs">بودجه</p>
                                    <p className="text-xs font-bold">
                                        {getCurrency(25000000)}
                                    </p>
                                </span>
                            </div>
                        </div>
                        <p className="leading-8">
                            در طراحی سایت، بک‌اند یک جانب اساسی است که اطمینان
                            از عملکرد صحیح و پایدار وبسایت دارد. توسعه بک‌اند
                            باعث ایجاد سرورها، پایگاه داده، و منطق کسب و کار
                            می‌شود تا تجربه کاربری بی‌نقص و سریع برای کاربران
                            فراهم شود. انتخاب یک بک‌اند قوی و بهینه مهمترین گام
                            در راه بهبود عملکرد وبسایت است.
                        </p>
                        <div className="flex gap-14">
                            <div className="flex-cols gap-1 rounded-lg border-2 border-dashed border-slate-300 px-6 py-2">
                                <p className="text-sm font-bold">
                                    {getLocaleDate(new Date())}
                                </p>
                                <p className="text-mute text-xs">
                                    تاریخ آخرین تغییر
                                </p>
                            </div>
                            <div className="flex-cols gap-1 rounded-lg border-2 border-dashed border-slate-300 px-6 py-2">
                                <p className="text-sm font-bold">
                                    {getCurrency(250000)}
                                </p>
                                <p className="text-mute text-xs">
                                    آخرین مبلغ دریافتی
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <SmallAvatars avatarsArray={lastProjectTeamsData} />
                            <LinkButton
                                path="/"
                                fullWidth={false}
                                icon="arrow-up-right-from-square"
                            >
                                مشاهده پروژه
                            </LinkButton>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
