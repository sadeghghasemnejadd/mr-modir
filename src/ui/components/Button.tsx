import { ReactNode } from 'react'
import cx from 'classnames'

interface IButtonProps {
    type?: 'submit' | 'button' | 'reset'
    children: ReactNode
}
export default function Button({ type = 'submit', children }: IButtonProps) {
    return (
        <button
            type={type}
            className={cx(
                'shadow-main self-end rounded-xl border-[1px] border-primary-600 px-2 py-2 text-[8px] leading-none text-stone-800 hover:bg-primary-600 hover:text-primary-50 dark:text-primary-50 md:px-4 md:text-xs'
            )}
        >
            {children}
        </button>
    )
}
