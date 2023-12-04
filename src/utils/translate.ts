import ActivityTypeEnum from '../Enums/ActivityTypeEnum'

export const translateActivityType = (activityType: ActivityTypeEnum) => {
    switch (activityType) {
        case ActivityTypeEnum.added:
            return 'اضافه شده'
        case ActivityTypeEnum.created:
            return 'ایجاد شده'
        case ActivityTypeEnum.initiated:
            return 'شروع شده'
        case ActivityTypeEnum.placed:
            return 'انجام شده'
        case ActivityTypeEnum.sent:
            return 'ارسال شده'
        default:
            return ''
    }
}

export const hi = 'hi'
