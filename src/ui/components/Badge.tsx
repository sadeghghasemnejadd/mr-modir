import cx from 'classnames'
import Icons from '../../icons/Icons'

interface IBadgeProps {
    text: string | number
    color?: 'success' | 'error' | 'main' | 'primary'
    rounded?: boolean
    size?: 'sm' | 'md' | 'xs'
    textColor?: 'success' | 'error' | 'main'
    icon?: string
}

const colorSuccess =
    'bg-green-300 text-green-900 dark:bg-green-800 dark:text-green-100'
const colorError = 'bg-red-300 text-red-900 dark:bg-red-800 dark:text-red-100'
const colorMain =
    'bg-gray-200 dark:bg-stone-700 text-primary-900 dark:text-primary-100'
const colorPrimary =
    'bg-primary-300 text-primary-900 dark:bg-primary-800 dark:text-primary-100'
export default function Badge({
    text,
    color = 'success',
    rounded = false,
    size = 'md',
    textColor,
    icon,
}: IBadgeProps) {
    return (
        <div
            className={cx(
                'text-base-res px-2 py-1 font-bold md:px-3',
                size === 'sm' && 'text-sm',
                size === 'xs' && 'text-xs',
                rounded ? 'rounded-full' : 'rounded-lg',
                color === 'success' && colorSuccess,
                color === 'error' && colorError,
                color === 'main' && colorMain,
                color === 'primary' && colorPrimary
            )}
        >
            <div className="flex-v-center gap-1">
                <p
                    className={cx(
                        !!textColor &&
                            textColor === 'success' &&
                            '!text-green-700',
                        !!textColor && textColor === 'error' && '!text-red-500'
                    )}
                >
                    {text}
                </p>
                {!!icon && (
                    <span
                        className={cx(
                            '[&>svg]:size-3',
                            !!textColor &&
                                textColor === 'success' &&
                                '[&>svg]:!fill-green-700',
                            !!textColor &&
                                textColor === 'error' &&
                                '[&>svg]:!fill-red-500'
                        )}
                    >
                        <Icons name={icon} />
                    </span>
                )}
            </div>
        </div>
    )
}
