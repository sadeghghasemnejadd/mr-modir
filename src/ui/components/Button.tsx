import { ReactNode } from 'react'
import cx from 'classnames'

interface IButtonProps {
    type?: 'submit' | 'button' | 'reset'
    children: ReactNode
    variant?: 'outline' | 'fill'
    classNames?: string
    size?: 'md' | 'lg'
    onClick?: () => void
}
export default function Button({
    type = 'submit',
    children,
    variant = 'outline',
    classNames,
    size,
    onClick,
}: IButtonProps) {
    return (
        <button
            type={type}
            className={cx(
                classNames,
                'shadow-main self-end rounded-xl border-[1px] border-primary-600 p-2 leading-none hover:bg-primary-600 hover:text-primary-50 dark:text-primary-50 md:px-4 ',
                variant === 'fill' &&
                    'bg-primary-500 text-gray-50 dark:bg-primary-800 dark:text-stone-200 dark:hover:bg-primary-600',
                variant === 'outline' && 'text-stone-800',
                size === 'lg' && 'text-md',
                size === 'md' && 'p-3 text-[8px] md:text-xs'
            )}
            aria-hidden="true"
            onClick={() => onClick?.()}
        >
            {children}
        </button>
    )
}
