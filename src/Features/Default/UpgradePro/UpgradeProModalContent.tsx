import cx from 'classnames'
import getCurrency from '../../../utils/currency'
import Button from '../../../ui/components/Button'
import Icons from '../../../icons/Icons'
import IPricingPlans from './PricingPlansInterface'
import Badge from '../../../ui/components/Badge'

type DurationPlan = 'monthly' | 'yearly'

interface IUpgradeProModalContentProps {
    durationPlan: DurationPlan
    handleChangeDurationPlan: (selected: DurationPlan) => void
    pricingPlans: IPricingPlans[]
    activePlan: number
    handleChangeActivePlan: (selected: number) => void
    activePlanInfo: IPricingPlans | undefined
    onClick?: () => void
}

export default function UpgradeProModalContent({
    durationPlan,
    handleChangeDurationPlan,
    pricingPlans,
    activePlan,
    handleChangeActivePlan,
    activePlanInfo,
    onClick: handleCloseModal,
}: IUpgradeProModalContentProps) {
    return (
        <div className="flex-cols items-center gap-6 text-center">
            <div className="flex-cols gap-2">
                <h2 className="text-xl font-bold">پلن های ارتقا</h2>
                <p className="text-mute">
                    اگر شما اطلاعات بیشتری می خواهید ، لطفا اطلاعات قیمتی ما را
                    بررسی کنید
                </p>
            </div>
            <div className="flex-cols w-full gap-6">
                <ul className="flex justify-center">
                    <li
                        className={cx(
                            'cursor-pointer rounded-lg rounded-bl-none rounded-tl-none bg-slate-200 px-6 py-3 duration-0 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500',
                            durationPlan === 'yearly' &&
                                '!bg-slate-300 dark:!bg-slate-500'
                        )}
                        aria-hidden="true"
                        onClick={() => handleChangeDurationPlan('yearly')}
                    >
                        سالانه
                    </li>
                    <li
                        className={cx(
                            'cursor-pointer rounded-lg rounded-br-none rounded-tr-none bg-slate-200 px-6 py-3 duration-0 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500',
                            durationPlan === 'monthly' &&
                                '!bg-slate-300 dark:!bg-slate-500'
                        )}
                        aria-hidden="true"
                        onClick={() => handleChangeDurationPlan('monthly')}
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
                                        activePlan === price.id &&
                                            'bg-primary-600'
                                    )}
                                    aria-hidden="true"
                                    onClick={() =>
                                        handleChangeActivePlan(price.id)
                                    }
                                >
                                    <span
                                        className={cx(
                                            'h-6 w-6 rounded-full bg-slate-200 dark:bg-slate-400',
                                            activePlan === price.id &&
                                                'border-[6px] border-primary-400 dark:border-primary-500'
                                        )}
                                    />
                                    <div className="flex-cols flex-1 items-start gap-1">
                                        <p
                                            className={cx(
                                                activePlan === price.id &&
                                                    'font-bold text-gray-50',
                                                'flex items-center gap-2'
                                            )}
                                        >
                                            <span>{price.name}</span>
                                            {price.isPopular && (
                                                <Badge
                                                    text="پر طرفدار"
                                                    color="success"
                                                    size="xs"
                                                />
                                            )}
                                        </p>
                                        <p
                                            className={cx(
                                                'text-mute text-xs',
                                                activePlan === price.id &&
                                                    'text-gray-50'
                                            )}
                                        >
                                            {price.description}
                                        </p>
                                    </div>
                                    {(!!price.monthlyPrice ||
                                        !!price.annualPrice) && (
                                        <div className="flex items-end gap-1">
                                            <p
                                                className={cx(
                                                    'text-sm font-bold',
                                                    activePlan === price.id &&
                                                        'text-gray-50'
                                                )}
                                            >
                                                {getCurrency(
                                                    durationPlan === 'monthly'
                                                        ? price.monthlyPrice!
                                                        : price.annualPrice!
                                                )}
                                            </p>
                                            <p
                                                className={cx(
                                                    'text-mute text-[8px]',
                                                    activePlan === price.id &&
                                                        'text-gray-50'
                                                )}
                                            >
                                                /{' '}
                                                {durationPlan === 'monthly'
                                                    ? 'ماهانه'
                                                    : 'سالیانه'}
                                            </p>
                                        </div>
                                    )}
                                    {!!price.monthlyPrice ||
                                        !!price.annualPrice || (
                                            <Button variant="fill" size="md">
                                                با ما تماس بگیرید
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
                                {activePlanInfo?.teamSize ?? 1000} نفره
                            </p>
                        </div>
                        {!activePlanInfo?.isCustom && (
                            <ul className="flex-cols gap-6">
                                {activePlanInfo?.options?.map((option) => (
                                    <li
                                        key={option.id}
                                        className="flex items-center justify-between"
                                    >
                                        <p>{option.name}</p>
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
                                ))}
                            </ul>
                        )}
                        {activePlanInfo?.isCustom && (
                            <p className="text-right leading-8">
                                با گذاشتن اعتماد شما به عنوان اولین اولویت ما،
                                پلن شخصی را طراحی کرده‌ایم تا تجربه‌ی شما از
                                خدمات ما به یک سطح جدید ارتقا یابد. این پلن شامل
                                توانمندی‌ها و امکاناتی است که به شما این امکان
                                را می‌دهد تا بهترین بهره را از محصولات یا خدمات
                                ما ببرید.
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex-center gap-3 ">
                    <Button variant="fill" size="lg">
                        ارتقا به پلن ویژه
                    </Button>
                    <Button
                        size="lg"
                        variant="ghost"
                        onClick={handleCloseModal}
                    >
                        انصراف
                    </Button>
                </div>
            </div>
        </div>
    )
}
