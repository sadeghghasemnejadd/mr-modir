interface IBadgeProps {
    text: string | number
    color?: 'success' | 'error'
    rounded?: boolean
    size?: 'sm' | 'md'
}
export default function Badge({
    text,
    color = 'success',
    rounded = false,
    size = 'md',
}: IBadgeProps) {
    return (
        <div
            className={`border px-3 py-1 font-bold
      ${size === 'sm' ? 'text-sm' : ''}
      ${rounded ? 'rounded-full' : 'rounded-lg'}
      ${
          color === 'success'
              ? ' bg-green-100 text-green-900 dark:bg-green-800 dark:text-green-100'
              : ''
      }
      ${
          color === 'error'
              ? ' bg-red-100 text-red-900 dark:bg-red-800 dark:text-red-100'
              : ''
      }`}
        >
            <p>{text}</p>
        </div>
    )
}
