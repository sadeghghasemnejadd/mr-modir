import { ChangeEvent } from 'react'
import { IoIosSearch } from 'react-icons/io'

interface ISarchProps {
    placeholder?: string
    containerClassNames?: string
    inputClassNames?: string
    onChangeValue: (event: ChangeEvent<HTMLInputElement>) => void
    value: string
}
export default function Search({
    placeholder,
    containerClassNames,
    inputClassNames,
    onChangeValue,
    value,
}: ISarchProps) {
    return (
        <div
            className={`relative [&>svg]:absolute [&>svg]:right-2 [&>svg]:top-1/2 [&>svg]:-translate-y-1/2 [&>svg]:fill-stone-800 dark:[&>svg]:fill-stone-100 ${containerClassNames}`}
        >
            <IoIosSearch />
            <input
                placeholder={placeholder}
                className={`${inputClassNames} bg-main shadow-main rounded-lg px-1 py-2 pr-10 text-xs caret-primary-500 placeholder:text-xs focus:outline-dashed focus:outline-primary-800`}
                value={value}
                onChange={onChangeValue}
            />
        </div>
    )
}
