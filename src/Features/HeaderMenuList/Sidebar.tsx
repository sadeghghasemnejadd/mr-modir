import Icons from '../../icons/Icons'
import Drawer from '../../ui/components/Drawer'
import UnCollapseNavbar from '../Navbar/UnCollapseNavbar'

export default function Sidebar() {
    return (
        <li className="lg:hidden">
            <Drawer direction="right">
                <Drawer.Thumbnail name="sidebar">
                    <span className="flex-center svg-duration-100 md:[&>svg]:size-8 [&>svg]:size-6 [&>svg]:hover:fill-primary-500">
                        <Icons name="bars-staggered" />
                    </span>
                </Drawer.Thumbnail>
                <Drawer.Box name="sidebar" hasHeader={false}>
                    <UnCollapseNavbar isResponsive />
                </Drawer.Box>
            </Drawer>
        </li>
    )
}
