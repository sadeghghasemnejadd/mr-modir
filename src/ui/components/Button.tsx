import { ReactNode } from 'react'

interface IButtonProps {
    type?: 'submit' | 'button' | 'reset'
    children: ReactNode
}
export default function Button({ type = 'submit', children }: IButtonProps) {
    return (
        <button
            type={type}
            className="shadow-main self-end rounded-xl border-[1px] border-primary-600 px-4 py-2 text-xs text-primary-800 hover:bg-primary-600 hover:text-primary-50 dark:text-primary-100"
        >
            {children}
        </button>
    )
}
