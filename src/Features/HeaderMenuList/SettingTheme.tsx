import {
    PiGearFine,
    PiPaintBucket,
    PiSun,
    PiMoon,
    PiChalkboardSimple,
} from 'react-icons/pi'
import HeaderDropdown from '../../ui/components/HeaderDropdown'
import Divider from '../../ui/components/Divider'
import ThemeColorEnum from '../../Enums/themeColorEnum'
import useTheme from '../../hooks/useTheme'

interface IColorData {
    id: number
    color: string
    colorName: ThemeColorEnum
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
export default function SettingTheme() {
    const { changeColorTheme, themeColor } = useTheme()
    const handleChangeThemeColor = (colorName: ThemeColorEnum) => {
        changeColorTheme(colorName)
    }
    return (
        <div>
            <HeaderDropdown>
                <HeaderDropdown.Thumbnail name="setting">
                    <div className="group relative">
                        <span className="[&>svg]:transition-all [&>svg]:duration-100  [&>svg]:group-hover:fill-primary-500">
                            <PiPaintBucket size={30} />
                        </span>
                        <span className=" absolute -bottom-2 -left-2 [&>svg]:transition-all [&>svg]:duration-100 [&>svg]:group-hover:animate-spin [&>svg]:group-hover:fill-primary-500">
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
                                                ? 'outline outline-4 outline-primary-300'
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
                                <div className=" group flex cursor-pointer items-center gap-3 transition-all [&>svg]:transition-all [&>svg]:duration-0 [&>svg]:hover:fill-primary-500">
                                    <PiSun size={20} />
                                    <p className="group-hover:text-primary-500">
                                        روشن
                                    </p>
                                </div>
                                <div className=" group flex cursor-pointer items-center gap-3 transition-all [&>svg]:transition-all [&>svg]:duration-0 [&>svg]:hover:fill-primary-500">
                                    <PiMoon size={20} />
                                    <p className="group-hover:text-primary-500">
                                        تاریک
                                    </p>
                                </div>
                                <div className=" group flex cursor-pointer items-center gap-3 transition-all [&>svg]:transition-all [&>svg]:duration-0 [&>svg]:hover:fill-primary-500">
                                    <PiChalkboardSimple size={20} />
                                    <p className="group-hover:text-primary-500">
                                        سیستم
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </HeaderDropdown.DropBox>
            </HeaderDropdown>
        </div>
    )
}
