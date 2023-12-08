import { ReactNode } from 'react'
import cx from 'classnames'

import HeaderDropdown from '../../ui/components/HeaderDropdown'
import Divider from '../../ui/components/Divider'
import ThemeColorEnum from '../../Enums/ThemeColorEnum'
import useTheme from '../../hooks/useTheme'
import ThemeModeEnum from '../../Enums/ThemeModeEnum'
import Icons from '../../icons/Icons'

interface IColorData {
    id: number
    color: string
    colorName: ThemeColorEnum
}
interface IModeData {
    id: number
    name: string
    modeName: ThemeModeEnum
    icon: ReactNode
}
const colorsData: IColorData[] = [
    {
        id: 0,
        color: 'bg-red-500',
        colorName: ThemeColorEnum.red,
    },
    {
        id: 1,
        color: 'bg-blue-500',
        colorName: ThemeColorEnum.blue,
    },
    {
        id: 2,
        color: 'bg-purple-500',
        colorName: ThemeColorEnum.purple,
    },
    {
        id: 3,
        color: 'bg-green-500',
        colorName: ThemeColorEnum.green,
    },
]
const modeData: IModeData[] = [
    {
        id: 0,
        name: 'روشن',
        modeName: ThemeModeEnum.light,
        icon: <Icons name="brightness" size={20} />,
    },
    {
        id: 1,
        name: 'تیره',
        modeName: ThemeModeEnum.dark,
        icon: <Icons name="moon" size={20} />,
    },
    {
        id: 2,
        name: 'سیستم',
        modeName: ThemeModeEnum.system,
        icon: <Icons name="laptop" size={20} />,
    },
]
export default function SettingTheme() {
    const { changeColorTheme, themeColor, changeModeTheme, themeMode } =
        useTheme()

    const handleChangeThemeColor = (colorName: ThemeColorEnum) => {
        changeColorTheme(colorName)
    }
    const handleChangeThemeMode = (colorMOde: ThemeModeEnum) => {
        changeModeTheme(colorMOde)
    }
    return (
        <li>
            <HeaderDropdown>
                <HeaderDropdown.Thumbnail name="setting">
                    <div className="flex-center group relative">
                        <span className="svg-duration-100 md:[&>svg]:size-8 [&>svg]:size-6 [&>svg]:group-hover:fill-primary-500">
                            <Icons name="paintbrush" />
                        </span>
                        <span className="svg-duration-100 md:[&>svg]:size-4 [&>svg]:size-3 absolute -top-2 left-0 [&>svg]:duration-100 [&>svg]:group-hover:animate-spin [&>svg]:group-hover:fill-primary-500">
                            <Icons name="gear" />
                        </span>
                    </div>
                </HeaderDropdown.Thumbnail>
                <HeaderDropdown.DropBox name="setting" size="sm">
                    <div className="flex-cols gap-4 md:gap-6">
                        <div>
                            <p className="text-base-res">رنگ ها</p>
                            <Divider />
                            <div className="grid grid-cols-2 gap-y-4 md:grid-cols-4">
                                {colorsData.map((color) => (
                                    <span
                                        key={color.id}
                                        className={cx(
                                            'md:size-5 size-6 block cursor-pointer rounded-full transition-all',
                                            color.color,
                                            themeColor === color.colorName &&
                                                'outline outline-4 outline-primary-300 dark:outline-primary-400'
                                        )}
                                        onClick={() =>
                                            handleChangeThemeColor(
                                                color.colorName
                                            )
                                        }
                                        aria-hidden="true"
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-base-res">حالت ها</p>
                            <Divider />
                            <div className="flex-cols gap-2">
                                {modeData.map((mode) => (
                                    <div
                                        key={mode.id}
                                        className={cx(
                                            'flex-v-center group cursor-pointer gap-3 transition-all [&>svg]:transition-all [&>svg]:duration-0 [&>svg]:hover:fill-primary-500',
                                            themeMode === mode.modeName &&
                                                '[&>svg]:fill-primary-500 '
                                        )}
                                        onClick={() =>
                                            handleChangeThemeMode(mode.modeName)
                                        }
                                        aria-hidden="true"
                                    >
                                        {mode.icon}
                                        <p
                                            className={cx(
                                                'group-hover:text-primary-500',
                                                themeMode === mode.modeName &&
                                                    'text-primary-500'
                                            )}
                                        >
                                            {mode.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </HeaderDropdown.DropBox>
            </HeaderDropdown>
        </li>
    )
}
