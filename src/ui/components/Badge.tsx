interface IBadgeProps {
    text: string | number
    color?: 'success' | 'error' | 'main'
    rounded?: boolean
    size?: 'sm' | 'md' | 'xs'
}
export default function Badge({
    text,
    color = 'success',
    rounded = false,
    size = 'md',
}: IBadgeProps) {
    return (
        <div
            className={`text-base-res border px-2 py-1 font-bold md:px-3
      ${size === 'sm' ? 'text-sm' : ''}
      ${size === 'xs' ? 'text-xs' : ''}
      ${rounded ? 'rounded-full' : 'rounded-lg'}
      ${
          color === 'success'
              ? ' bg-green-300 text-green-900 dark:bg-green-800 dark:text-green-100'
              : ''
      }
      ${
          color === 'error'
              ? ' bg-red-300 text-red-900 dark:bg-red-800 dark:text-red-100'
              : ''
      }
      ${
          color === 'main'
              ? ' bg-primary-300 text-primary-900 dark:bg-primary-800 dark:text-primary-100'
              : ''
      }
      `}
        >
            <p>{text}</p>
        </div>
    )
}
