import { ReactNode } from 'react'
import cx from 'classnames'

import TooltipDirectionEnum from '../../Enums/TooltipDirectionEnum'

interface ITooltipProps {
    children: ReactNode
    direction?: TooltipDirectionEnum
    text: string
    size?: 'md' | 'sm'
}
export default function Tooltip({
    children,
    direction = TooltipDirectionEnum.top,
    text,
    size = 'md',
}: ITooltipProps) {
    return (
        <div
            className={cx(
                'tooltip relative cursor-pointer after:invisible after:absolute after:z-20 after:min-w-max after:rounded-xl after:bg-gray-200 after:px-4 after:py-2 after:transition-all hover:after:visible dark:after:bg-stone-600',
                direction === TooltipDirectionEnum.top &&
                    'after:-left-1/2 after:-top-9',
                direction === TooltipDirectionEnum.bottom &&
                    'after:-bottom-[calc(100%+20px)] after:translate-x-1/2',
                direction === TooltipDirectionEnum.left &&
                    'after:right-[calc(100%+10px)] after:top-1/2 after:-translate-y-1/2',
                direction === TooltipDirectionEnum.right &&
                    'after:left-[calc(100%+10px)] after:top-1/2 after:-translate-y-1/2',
                size === 'md' && 'after:text-base',
                size === 'sm' && 'after:text-[10px]'
            )}
            data-content={text}
        >
            {children}
        </div>
    )
}
