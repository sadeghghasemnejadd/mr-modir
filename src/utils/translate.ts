import ActivityTypeEnum from '../Enums/ActivityTypeEnum'

export const translateActivityType = (activityType: ActivityTypeEnum) => {
    switch (activityType) {
        case ActivityTypeEnum.added:
            return 'اضافه شده'
        default:
            return ''
    }
}

export const hi = 'hi'
