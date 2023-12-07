import Icons from '../../icons/Icons'
import navbarItems from '../../routes/navbarItems'
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
            <ul className="flex-cols items-center gap-3">
                {navbarItems.map((item) => (
                    <li key={item.name}>
                        <span className="[&>svg]:size-9">
                            {!!item.icon && <Icons name={item.icon} />}
                            {!item.icon && <Icons name="layer-group" />}
                        </span>
                    </li>
                ))}
            </ul>
        </>
    )
}
