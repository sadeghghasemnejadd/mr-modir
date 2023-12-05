import Divider from '../../ui/components/Divider'

export default function CollapseNavbar() {
    return (
        <>
            <div className="flex-center w-full">
                <img
                    src="images/logo/logo.png"
                    alt="logo"
                    className="size-12"
                />
            </div>
            <Divider />
            <ul>
                <li>home</li>
            </ul>
        </>
    )
}
