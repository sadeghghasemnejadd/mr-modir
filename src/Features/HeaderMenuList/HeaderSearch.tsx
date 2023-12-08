import { useState, ChangeEvent } from 'react'
import cx from 'classnames'

import { useSelector } from 'react-redux'
import Search from '../../ui/components/Search'
import IReduxStore from '../../Models/reduxStore'

export default function HeaderSearch() {
    const [searchInput, setSearchInput] = useState<string>('')
    const { isCollapseSearch } = useSelector(
        (state: IReduxStore) => state.header
    )
    const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value)
    }
    return (
        <li className={cx('ml-auto w-[30%]', isCollapseSearch && 'w-full')}>
            <Search
                placeholder="جستجو کنید ..."
                containerClassNames="lg:w-full"
                inputClassNames="hidden lg:block border-none shadow-none w-full py-3 dark:shadow-none"
                onChangeValue={handleChangeSearch}
                value={searchInput}
                isResponsive
            />
        </li>
    )
}
