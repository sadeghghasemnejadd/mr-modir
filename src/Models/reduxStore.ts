import { IHeaderReduxState } from '../Features/HeaderMenuList/redux/header'
import { INavbarState } from '../Features/Navbar/navbarReducer'
import { IThemeState } from '../store/uiReducers/theme'

interface IReduxStore {
    navbar: INavbarState
    header: IHeaderReduxState
    theme: IThemeState
}

export default IReduxStore
