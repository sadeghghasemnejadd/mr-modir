import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icons from '../../icons/Icons'
import {
    collapseSearch,
    unCollapseSearch,
} from '../../Features/HeaderMenuList/redux/header'
import IReduxStore from '../../Models/reduxStore'

interface ISarchProps {
    placeholder?: string
    containerClassNames?: string
    inputClassNames?: string
    onChangeValue: (event: ChangeEvent<HTMLInputElement>) => void
    value: string
    isResponsive?: boolean
}
export default function Search({
    placeholder,
    containerClassNames,
    inputClassNames,
    onChangeValue,
    value,
    isResponsive = false,
}: ISarchProps) {
    const dispatch = useDispatch()
    const { isCollapseSearch } = useSelector(
        (state: IReduxStore) => state.header
    )
    console.log(isCollapseSearch)
    const handleClickSearchIcon = () => {
        if (!isResponsive) return
        dispatch(collapseSearch())
    }
    const handleCloseSearch = () => {
        dispatch(unCollapseSearch())
    }
    return (
        <div
            className={`relative flex items-center ${containerClassNames} ${
                isCollapseSearch ? 'w-full' : ''
            }`}
        >
            <span
                className={`[&>svg]:size-6 size-6 block [&>svg]:right-2 [&>svg]:top-1/2 [&>svg]:fill-stone-800 dark:[&>svg]:fill-stone-100 md:[&>svg]:absolute md:[&>svg]:-translate-y-1/2 ${
                    isCollapseSearch ? '!hidden' : ''
                }`}
                aria-hidden="true"
                onClick={handleClickSearchIcon}
            >
                <Icons name="magnifying-glass" />
            </span>
            <input
                placeholder={placeholder}
                className={`${inputClassNames} bg-main shadow-main pr:2 rounded-lg px-1 py-2 text-xs caret-primary-500 placeholder:text-xs focus:outline-none ${
                    isCollapseSearch ? '!block w-[90%]' : ''
                }`}
                value={value}
                onChange={onChangeValue}
            />
            <span
                className={`[&>svg]:size-4 size-4 block [&>svg]:fill-stone-800 dark:[&>svg]:fill-stone-100 md:[&>svg]:absolute ${
                    isCollapseSearch ? '' : '!hidden'
                }`}
                aria-hidden="true"
                onClick={handleCloseSearch}
            >
                <Icons name="xmark" />
            </span>
        </div>
    )
}
