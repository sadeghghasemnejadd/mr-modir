import { INavBarItems } from '../routes/navbarItems'

const findAndCreateHierarchy = (item: INavBarItems, list: INavBarItems[]) => {
    let output = ''

    const findItem = (navItem: INavBarItems, currentPath: string = '') => {
        const newPath = currentPath
            ? `${currentPath}:${navItem.name}`
            : navItem.name

        if (navItem.name === item.name) {
            output = newPath
            return
        }

        if (navItem.children) {
            navItem.children.forEach((child) => findItem(child, newPath))
        }
    }

    list.forEach((l) => findItem(l))
    return output
}

export default findAndCreateHierarchy
