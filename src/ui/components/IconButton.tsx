import cx from 'classnames'
import Icons from '../../icons/Icons'

interface IIconButtonProps {
    icon: string
    name: string
    id: number
    activeFilter: number
    onClickHandler?: (id: number) => void
}

export default function IconButton({
    icon,
    name,
    id,
    activeFilter,
    onClickHandler,
}: IIconButtonProps) {
    const isActive = id === activeFilter
    return (
        <div
            className={cx(
                'flex-cols group w-24 cursor-pointer items-center gap-2 rounded-lg border-2 py-3 dark:border-slate-700',
                isActive &&
                    'border-b-4 border-b-primary-500 dark:border-b-primary-800'
            )}
            aria-hidden="true"
            onClick={() => onClickHandler?.(id)}
        >
            <span
                className={cx(
                    '[&>svg]:size-4 group-hover:[&>svg]:fill-primary-500',
                    isActive && '[&>svg]:fill-primary-500'
                )}
            >
                <Icons name={icon} />
            </span>
            <p className="text-xs">{name}</p>
        </div>
    )
}
