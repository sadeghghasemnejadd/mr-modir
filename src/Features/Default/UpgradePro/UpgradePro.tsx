import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../ui/components/Card'
import Button from '../../../ui/components/Button'
import Modal from '../../../ui/components/Modal'
import UpgradeProModalContent from './UpgradeProModalContent'
import IPricingPlans from './PricingPlansInterface'

type DurationPlan = 'monthly' | 'yearly'

const pricingPlans: IPricingPlans[] = [
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
                            <UpgradeProModalContent
                                activePlan={activePlan}
                                activePlanInfo={activePlanInfo}
                                durationPlan={durationPlan}
                                handleChangeActivePlan={handleChangeActivePlan}
                                handleChangeDurationPlan={
                                    handleChangeDurationPlan
                                }
                                pricingPlans={pricingPlans}
                            />
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
