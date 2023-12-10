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
    const percentage = Math.ceil((finished / total) * 100)
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
                    'relative flex h-2 w-full overflow-hidden rounded-2xl bg-stone-300/50 dark:bg-stone-400'
                )}
            >
                <span
                    className={cx(
                        'absolute right-0 top-0 z-10 h-full  bg-white'
                    )}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    )
}
