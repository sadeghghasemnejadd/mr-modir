import HeaderMenuList from '../../Features/HeaderMenuList/HeaderMenuList'

export default function Header() {
    return (
        <header className="dark:shadow-box-light col-[2/-1] ml-12 mt-12 flex h-full flex-row-reverse items-center rounded-md bg-gray-100 px-12 shadow-box dark:bg-slate-800">
            <HeaderMenuList />
        </header>
    )
}
