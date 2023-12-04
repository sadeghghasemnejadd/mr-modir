import { ReactNode } from 'react'
import TooltipDirectionEnum from '../../Enums/TooltipDiectionEnum'

interface ITooltipProps {
    children: ReactNode
    direction?: TooltipDirectionEnum
    text: string
}
export default function Tooltip({
    children,
    direction = TooltipDirectionEnum.top,
    text,
}: ITooltipProps) {
    return (
        <div
            className={`after:content-['${text
                .split(' ')
                .join(
                    '_'
                )}'] relative cursor-pointer after:invisible after:absolute after:min-w-max after:rounded-xl after:bg-slate-600 after:px-4 after:py-2 after:transition-all hover:after:visible
                ${
                    direction === TooltipDirectionEnum.top
                        ? 'after:-top-[calc(100%+20px)] after:translate-x-1/2'
                        : ''
                } 
                ${
                    direction === TooltipDirectionEnum.bottom
                        ? 'after:-bottom-[calc(100%+20px)] after:translate-x-1/2'
                        : ''
                } 
                ${
                    direction === TooltipDirectionEnum.left
                        ? 'after:right-[calc(100%+10px)] after:top-1/2 after:-translate-y-1/2'
                        : ''
                }
               ${
                   direction === TooltipDirectionEnum.right
                       ? 'after:left-[calc(100%+10px)] after:top-1/2 after:-translate-y-1/2'
                       : ''
               }
            `}
        >
            {children}
        </div>
    )
}
