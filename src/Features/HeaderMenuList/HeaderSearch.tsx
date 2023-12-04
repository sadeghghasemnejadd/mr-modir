import { useState, ChangeEvent } from 'react'
import Search from '../../ui/components/Search'

export default function HeaderSearch() {
    const [searchInput, setSearchInput] = useState<string>('')

    const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value)
    }
    return (
        <li className="ml-auto w-[30%]">
            <Search
                placeholder="جستجو کنید ..."
                containerClassNames="w-full"
                inputClassNames="border-none shadow-none w-full py-3 dark:shadow-none"
                onChangeValue={handleChangeSearch}
                value={searchInput}
            />
        </li>
    )
}
