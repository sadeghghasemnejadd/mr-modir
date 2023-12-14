import { useState } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import Card from '../../ui/components/Card'
import Button from '../../ui/components/Button'
import Modal from '../../ui/components/Modal'
import Icons from '../../icons/Icons'
import getCurrency from '../../utils/currency'

type DurationPlan = 'monthly' | 'yearly'
const pricingPlans = [
    {
        id: 0,
        name: 'شروع',
        description: 'بهترین برای دانش آموزان',
        monthlyPrice: 159_000,
        annualPrice: 1_112_000,
        teamSize: 10,
        options: [
            { id: 0, name: 'برای 10 کاربر فعال', isActive: true },
            { id: 1, name: 'برای استفاده در 30 پروژه', isActive: true },
            { id: 2, name: 'ابزارک آنالیز', isActive: true },
            { id: 3, name: 'ابزارک مالی', isActive: false },
            { id: 4, name: 'ابزارک حساب', isActive: false },
            { id: 5, name: 'تحت وب', isActive: false },
            { id: 6, name: 'فضای ابری نامحدود', isActive: false },
        ],
    },
    {
        id: 1,
        name: 'پیشرفته',
        description: 'بهترین برای تیم های 100 نفره',
        monthlyPrice: 1_159_000,
        annualPrice: 12_112_000,
        teamSize: 100,
        options: [
            { id: 0, name: 'برای 10 کاربر فعال', isActive: true },
            { id: 1, name: 'برای استفاده در 30 پروژه', isActive: true },
            { id: 2, name: 'ابزارک آنالیز', isActive: true },
            { id: 3, name: 'ابزارک مالی', isActive: true },
            { id: 4, name: 'ابزارک حساب', isActive: true },
            { id: 5, name: 'تحت وب', isActive: false },
            { id: 6, name: 'فضای ابری نامحدود', isActive: false },
        ],
    },
    {
        id: 2,
        name: 'فوق حرفه ای',
        description: 'بهترین برای تیم های 1000 نفره',
        monthlyPrice: 10_159_000,
        annualPrice: 120_112_000,
        teamSize: 1000,
        options: [
            { id: 0, name: 'برای 10 کاربر فعال', isActive: true },
            { id: 1, name: 'برای استفاده در 30 پروژه', isActive: true },
            { id: 2, name: 'ابزارک آنالیز', isActive: true },
            { id: 3, name: 'ابزارک مالی', isActive: true },
            { id: 4, name: 'ابزارک حساب', isActive: true },
            { id: 5, name: 'تحت وب', isActive: true },
            { id: 6, name: 'فضای ابری نامحدود', isActive: true },
        ],
        isPopular: true,
    },
    {
        id: 3,
        name: 'شخصی',
        description: 'لایسنس شخصی ثبت کنید',
        isCustom: true,
    },
]
export default function UpgradePro() {
    const [durationPlan, setDurationPlan] = useState<DurationPlan>('monthly')
    const [activePlan, setActivePlan] = useState<number>(0)

    const handleChangeDurationPlan = (selected: DurationPlan) => {
        setDurationPlan(selected)
    }
    const handleChangeActivePlan = (selected: number) => {
        setActivePlan(selected)
    }
    const activePlanInfo = pricingPlans.find((price) => price.id === activePlan)
    return (
        <div className="col-[1/-1]">
            <Card backgroundUrl="images/upgrade-plan-bg.png">
                <div className="flex-cols relative z-20 items-center gap-12">
                    <p className="text-2xl font-bold leading-10">
                        تخفیف ویژه به مناسبت عید نوروز.
                        <br /> همین الان{' '}
                        <Link
                            to="/"
                            className="border-b-4 border-red-600/50 pb-2 text-red-500"
                        >
                            پلن خود را ارتقا
                        </Link>{' '}
                        دهید
                    </p>
                    <Modal name="upgradeToPro">
                        <Modal.Open>
                            <Button
                                type="button"
                                variant="fill"
                                classNames="self-center"
                            >
                                ارتقا دهید
                            </Button>
                        </Modal.Open>
                        <Modal.Content name="upgradeToPro" size="lg">
                            <div className="flex-cols items-center gap-6 text-center">
                                <div className="flex-cols gap-2">
                                    <h2 className="text-xl font-bold">
                                        پلن های ارتقا
                                    </h2>
                                    <p className="text-mute">
                                        اگر شما اطلاعات بیشتری می خواهید ، لطفا
                                        اطلاعات قیمتی ما را بررسی کنید
                                    </p>
                                </div>
                                <div className="flex-cols w-full gap-6">
                                    <ul className="flex justify-center">
                                        <li
                                            className={cx(
                                                'cursor-pointer rounded-lg rounded-bl-none rounded-tl-none bg-slate-200 px-6 py-3 duration-0 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500',
                                                durationPlan === 'yearly' &&
                                                    'bg-slate-300 dark:bg-slate-500'
                                            )}
                                            aria-hidden="true"
                                            onClick={() =>
                                                handleChangeDurationPlan(
                                                    'yearly'
                                                )
                                            }
                                        >
                                            سالانه
                                        </li>
                                        <li
                                            className={cx(
                                                'cursor-pointer rounded-lg rounded-br-none rounded-tr-none bg-slate-200 px-6 py-3 duration-0 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500',
                                                durationPlan === 'monthly' &&
                                                    'bg-slate-300 dark:bg-slate-500'
                                            )}
                                            aria-hidden="true"
                                            onClick={() =>
                                                handleChangeDurationPlan(
                                                    'monthly'
                                                )
                                            }
                                        >
                                            ماهانه
                                        </li>
                                    </ul>
                                    <div className="flex w-full gap-3">
                                        <div className="w-1/2">
                                            <ul className="flex-cols gap-6">
                                                {pricingPlans.map((price) => (
                                                    <li
                                                        key={price.id}
                                                        className={cx(
                                                            'flex cursor-pointer items-center justify-between gap-2 rounded-lg border-2 border-dashed p-3',
                                                            activePlan ===
                                                                price.id &&
                                                                'bg-primary-600'
                                                        )}
                                                        aria-hidden="true"
                                                        onClick={() =>
                                                            handleChangeActivePlan(
                                                                price.id
                                                            )
                                                        }
                                                    >
                                                        <span
                                                            className={cx(
                                                                'h-6 w-6 rounded-full bg-slate-200 dark:bg-slate-400',
                                                                activePlan ===
                                                                    price.id &&
                                                                    'border-[6px] border-primary-400 dark:border-primary-500'
                                                            )}
                                                        />
                                                        <div className="flex-cols flex-1 items-start">
                                                            <p
                                                                className={cx(
                                                                    activePlan ===
                                                                        price.id &&
                                                                        'font-bold text-gray-50'
                                                                )}
                                                            >
                                                                {price.name}
                                                            </p>
                                                            <p
                                                                className={cx(
                                                                    'text-mute text-xs',
                                                                    activePlan ===
                                                                        price.id &&
                                                                        'text-gray-50'
                                                                )}
                                                            >
                                                                {
                                                                    price.description
                                                                }
                                                            </p>
                                                        </div>
                                                        {(!!price.monthlyPrice ||
                                                            !!price.annualPrice) && (
                                                            <div className="flex items-end gap-1">
                                                                <p
                                                                    className={cx(
                                                                        'text-sm font-bold',
                                                                        activePlan ===
                                                                            price.id &&
                                                                            'text-gray-50'
                                                                    )}
                                                                >
                                                                    {getCurrency(
                                                                        durationPlan ===
                                                                            'monthly'
                                                                            ? price.monthlyPrice
                                                                            : price.annualPrice
                                                                    )}
                                                                </p>
                                                                <p
                                                                    className={cx(
                                                                        'text-mute text-[8px]',
                                                                        activePlan ===
                                                                            price.id &&
                                                                            'text-gray-50'
                                                                    )}
                                                                >
                                                                    /{' '}
                                                                    {durationPlan ===
                                                                    'monthly'
                                                                        ? 'ماهانه'
                                                                        : 'سالیانه'}
                                                                </p>
                                                            </div>
                                                        )}
                                                        {!!price.monthlyPrice ||
                                                            !!price.annualPrice || (
                                                                <Button
                                                                    variant="fill"
                                                                    size="md"
                                                                >
                                                                    با ما تماس
                                                                    بگیرید
                                                                </Button>
                                                            )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="flex-cols w-1/2 gap-3 rounded-lg bg-slate-200 p-6 dark:bg-slate-600">
                                            <div className="flex-cols items-start gap-1">
                                                <p>
                                                    پلن{' '}
                                                    <span className="font-extrabold">
                                                        {activePlanInfo?.name}
                                                    </span>{' '}
                                                    چه ویژگی هایی دارد؟
                                                </p>
                                                <p className="text-mute">
                                                    مناسب برای تیم های +
                                                    {activePlanInfo?.teamSize ??
                                                        1000}{' '}
                                                    نفره
                                                </p>
                                            </div>
                                            {!activePlanInfo?.isCustom && (
                                                <ul className="flex-cols gap-6">
                                                    {activePlanInfo?.options?.map(
                                                        (option) => (
                                                            <li
                                                                key={option.id}
                                                                className="flex items-center justify-between"
                                                            >
                                                                <p>
                                                                    {
                                                                        option.name
                                                                    }
                                                                </p>
                                                                <span
                                                                    className={cx(
                                                                        '[&>svg]:size-4 flex-center size-6 rounded-full bg-slate-300 dark:bg-slate-500',
                                                                        option.isActive &&
                                                                            '!bg-green-300 [&>svg]:fill-green-700'
                                                                    )}
                                                                >
                                                                    <Icons
                                                                        name={
                                                                            option.isActive
                                                                                ? 'check'
                                                                                : 'xmark'
                                                                        }
                                                                    />
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            )}
                                            {activePlanInfo?.isCustom && (
                                                <p className="text-right leading-8">
                                                    با گذاشتن اعتماد شما به
                                                    عنوان اولین اولویت ما، پلن
                                                    شخصی را طراحی کرده‌ایم تا
                                                    تجربه‌ی شما از خدمات ما به
                                                    یک سطح جدید ارتقا یابد. این
                                                    پلن شامل توانمندی‌ها و
                                                    امکاناتی است که به شما این
                                                    امکان را می‌دهد تا بهترین
                                                    بهره را از محصولات یا خدمات
                                                    ما ببرید.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Content>
                    </Modal>

                    <img
                        src="images/illustrator/Office-Gal.png"
                        alt="illustrator"
                        className="size-96"
                    />
                </div>
            </Card>
        </div>
    )
}
