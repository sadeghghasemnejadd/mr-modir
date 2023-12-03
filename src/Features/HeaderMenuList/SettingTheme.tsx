import { ReactNode } from 'react'
import {
    PiGearFine,
    PiSun,
    PiMoon,
    PiChalkboardSimple,
    PiPaintBrushLight,
} from 'react-icons/pi'
import HeaderDropdown from '../../ui/components/HeaderDropdown'
import Divider from '../../ui/components/Divider'
import ThemeColorEnum from '../../Enums/ThemeColorEnum'
import useTheme from '../../hooks/useTheme'
import ThemeModeEnum from '../../Enums/ThemeModeEnum'

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
        icon: <PiSun size={20} />,
    },
    {
        id: 1,
        name: 'تیره',
        modeName: ThemeModeEnum.dark,
        icon: <PiMoon size={20} />,
    },
    {
        id: 1,
        name: 'سیستم',
        modeName: ThemeModeEnum.system,
        icon: <PiChalkboardSimple size={20} />,
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
                    <div className="group relative">
                        <span className="[&>svg]:transition-all [&>svg]:duration-100  [&>svg]:group-hover:fill-primary-500">
                            <PiPaintBrushLight size={30} />
                        </span>
                        <span className=" absolute -top-2 left-0 [&>svg]:transition-all [&>svg]:duration-100 [&>svg]:group-hover:animate-spin [&>svg]:group-hover:fill-primary-500">
                            <PiGearFine id="gear" />
                        </span>
                    </div>
                </HeaderDropdown.Thumbnail>
                <HeaderDropdown.DropBox name="setting" size="sm">
                    <div className="flex flex-col gap-6">
                        <div>
                            <p>رنگ ها</p>
                            <Divider />
                            <div className="grid grid-cols-4">
                                {colorsData.map((color) => (
                                    <span
                                        key={color.id}
                                        className={`block h-5 w-5 cursor-pointer rounded-full transition-all ${
                                            color.color
                                        } ${
                                            themeColor === color.colorName
                                                ? 'outline outline-4 outline-primary-300 dark:outline-primary-400'
                                                : ''
                                        }`}
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
                            <p>حالت ها</p>
                            <Divider />
                            <div className="flex flex-col gap-2">
                                {modeData.map((mode) => (
                                    <div
                                        key={mode.id}
                                        className={`group flex cursor-pointer items-center gap-3 transition-all [&>svg]:transition-all [&>svg]:duration-0 [&>svg]:hover:fill-primary-500 ${
                                            themeMode === mode.modeName
                                                ? '[&>svg]:fill-primary-500 '
                                                : ''
                                        }`}
                                        onClick={() =>
                                            handleChangeThemeMode(mode.modeName)
                                        }
                                        aria-hidden="true"
                                    >
                                        {mode.icon}
                                        <p
                                            className={`group-hover:text-primary-500 ${
                                                themeMode === mode.modeName
                                                    ? 'text-primary-500'
                                                    : ''
                                            }`}
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
