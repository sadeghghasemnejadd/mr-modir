import cx from 'classnames'

interface IProgressBarProps {
    hasPendingText?: boolean
    finished: number
    total: number
}
export default function ProgressBar({
    hasPendingText = false,
    finished,
    total,
}: IProgressBarProps) {
    const pending = total - finished
    const percentage = (finished / total) * 100
    return (
        <div className="relative">
            {hasPendingText && (
                <span className="absolute bottom-[220%] right-0 text-stone-200">
                    {pending} مانده
                </span>
            )}
            <span className="absolute bottom-[220%] left-0 text-stone-200">
                {percentage}%
            </span>
            <div
                className={cx(
                    'relative h-2 w-full overflow-hidden rounded-2xl bg-stone-300/50 after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:bg-white dark:bg-stone-400',
                    `after:!w-[${percentage}%]`
                )}
            />
        </div>
    )
}
