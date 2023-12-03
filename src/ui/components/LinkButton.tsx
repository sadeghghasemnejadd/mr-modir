import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PiCaretLeft } from 'react-icons/pi'

interface ILinkButtonProps {
    path: string
    children: ReactNode
}
export default function LinkButton({ path, children }: ILinkButtonProps) {
    return (
        <Link
            to={path}
            className="group mt-3 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-center text-sm text-primary-400  transition-all hover:bg-primary-100 hover:text-primary-500 dark:hover:bg-primary-800 dark:hover:text-primary-50"
        >
            {children}
            <span className="[&>svg]:fill-primary-400 [&>svg]:transition-none dark:[&>svg]:group-hover:fill-primary-50">
                <PiCaretLeft size={15} />
            </span>
        </Link>
    )
}
