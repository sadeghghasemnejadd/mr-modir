import TooltipDirectionEnum from '../../Enums/TooltipDirectionEnum'
import Tooltip from './Tooltip'

export interface IAvatar {
    id: number
    name: string
    url?: string
}
interface ISmallAvatarsProps {
    avatarsArray: IAvatar[]
    maxSize?: number
}
export default function SmallAvatars({
    avatarsArray,
    maxSize = 6,
}: ISmallAvatarsProps) {
    return (
        <div className="flex">
            {avatarsArray.slice(0, maxSize).map((avatar) => (
                <Tooltip
                    key={avatar.id}
                    direction={TooltipDirectionEnum.top}
                    text={avatar.name}
                    size="sm"
                >
                    <div className="size-12 relative -mr-2 hover:z-10">
                        <img
                            src={avatar.url}
                            alt={avatar.name}
                            className="avatar bg-main h-full w-full"
                        />
                    </div>
                </Tooltip>
            ))}
            {avatarsArray.length > maxSize && (
                <div className="size-12 avatar flex-center bg-main relative -mr-2 text-sm hover:z-10">
                    {avatarsArray.length - maxSize}+
                </div>
            )}
        </div>
    )
}
