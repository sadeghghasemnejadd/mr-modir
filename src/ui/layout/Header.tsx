import HeaderMenuList from '../../Features/HeaderMenuList/HeaderMenuList'

export default function Header() {
    return (
        <header className="flex-rev-v-center bg-main shadow-main col-[2/-1] ml-12 mt-6 h-full rounded-md px-12">
            <HeaderMenuList />
        </header>
    )
}
