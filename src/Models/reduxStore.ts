import { IHeaderReduxState } from '../Features/HeaderMenuList/redux/header'
import { INavbarState } from '../Features/Navbar/navbarReducer'

interface IReduxStore {
    navbar: INavbarState
    header: IHeaderReduxState
}

export default IReduxStore
