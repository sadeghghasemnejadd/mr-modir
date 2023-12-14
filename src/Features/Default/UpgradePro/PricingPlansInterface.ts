export default interface IPricingPlans {
    id: number
    name: string
    description: string
    monthlyPrice?: number
    annualPrice?: number
    teamSize?: number
    options?: { id: number; name: string; isActive: boolean }[]
    isCustom?: boolean
    isPopular?: boolean
}
