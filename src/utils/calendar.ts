const getDayOfYear = (date: Date): number => {
    const year = date.getFullYear()
    const startOfYear = new Date(year, 0, 1)
    const diffMilliSecond = +date - +startOfYear
    const diffInDays = Math.floor(diffMilliSecond / (24 * 60 * 60 * 1000))
    return diffInDays
}
export const getCalculatedDateAndTime = (date: Date): string => {
    const nowDateTime: Date = new Date()
    if (
        nowDateTime.getFullYear() === date.getFullYear() &&
        nowDateTime.getMonth() === date.getMonth() &&
        nowDateTime.getDate() === date.getDate()
    ) {
        if (Math.round(nowDateTime.getHours() - date.getHours()) < 1) {
            return 'کمتر از یک ساعت پیش'
        }
        return `${Math.round(
            nowDateTime.getHours() - date.getHours()
        )} ساعت پیش`
    }
    if (
        nowDateTime.getFullYear() === date.getFullYear() &&
        nowDateTime.getMonth() - date.getMonth() <= 1
    ) {
        if (getDayOfYear(nowDateTime) - getDayOfYear(date) < 8) {
            return `${getDayOfYear(nowDateTime) - getDayOfYear(date)} روز پیش`
        }
        return date.toLocaleDateString('fa-ir')
    }

    return date.toLocaleDateString('fa-ir')
}
export const getLocaleHours = (date: Date): string =>
    new Intl.DateTimeFormat('fa-ir', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }).format(date)
