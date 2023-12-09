import { ReactNode } from 'react'
import cx from 'classnames'

interface ICardProps {
    children: ReactNode
    fixedHeight?: boolean
    backgroundUrl?: string
    bgColor?: 'main'
}

export default function Card({
    children,
    fixedHeight = false,
    backgroundUrl,
    bgColor,
}: ICardProps) {
    return (
        <div
            className={cx(
                'shadow-main bg-main relative w-full rounded-lg p-6',
                fixedHeight && 'h-56',
                bgColor === 'main' && '!bg-primary-700'
            )}
        >
            {!!backgroundUrl && (
                <div className="absolute inset-0 h-full w-full overflow-hidden">
                    <img
                        src={backgroundUrl}
                        alt="cart-bg"
                        className="absolute left-0 top-0 z-10 opacity-10 dark:invert"
                    />
                </div>
            )}
            {children}
        </div>
    )
}
