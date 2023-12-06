interface IIconsProps {
    name: string
    mode?: 'duotone' | 'light'
    size?: number
}

function Icons({ name, mode = 'duotone', size }: IIconsProps) {
    return (
        <svg className="icon" width={size ?? 24} height={size ?? 24}>
            <use xlinkHref={`icons-sprite/${mode}.svg#${name}`} />
        </svg>
    )
}
export default Icons
