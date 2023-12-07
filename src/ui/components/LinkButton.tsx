import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Icons from '../../icons/Icons'

interface ILinkButtonProps {
    path: string
    children: ReactNode
}
export default function LinkButton({ path, children }: ILinkButtonProps) {
    return (
        <Link
            to={path}
            className="flex-center group w-full gap-1 rounded-lg py-3 text-center text-sm text-primary-400 transition-all hover:bg-primary-100  hover:text-primary-500 dark:hover:bg-primary-800 dark:hover:text-primary-50 md:mt-3 md:gap-2"
        >
            {children}
            <span className="[&>svg]:fill-primary-400 [&>svg]:transition-none dark:[&>svg]:group-hover:fill-primary-50">
                <Icons name="angle-left" size={15} />
            </span>
        </Link>
    )
}
