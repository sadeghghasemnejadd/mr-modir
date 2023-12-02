import {
    PiGearFine,
    PiPaintBucket,
    PiSun,
    PiMoon,
    PiChalkboardSimple,
} from 'react-icons/pi'
import HeaderDropdown from '../../ui/components/HeaderDropdown'
import Divider from '../../ui/components/Divider'

const colorsData = [
    {
        id: 0,
        color: 'bg-red-500',
    },
    {
        id: 1,
        color: 'bg-blue-500',
    },
    {
        id: 2,
        color: 'bg-purple-500',
    },
    {
        id: 3,
        color: 'bg-green-500',
    },
]
export default function SettingTheme() {
    return (
        <div>
            <HeaderDropdown>
                <HeaderDropdown.Thumbnail name="setting">
                    <div className="group relative">
                        <span className="[&>svg]:transition-all  [&>svg]:group-hover:fill-red-500">
                            <PiPaintBucket size={30} />
                        </span>
                        <span className=" absolute -bottom-2 -left-2 [&>svg]:transition-all [&>svg]:group-hover:animate-spin [&>svg]:group-hover:fill-red-500">
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
                                        className={`block h-5 w-5 cursor-pointer rounded-full ${color.color}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <p>حالت ها</p>
                            <Divider />
                            <div className="flex flex-col gap-2">
                                <div className=" group flex cursor-pointer items-center gap-3 transition-all [&>svg]:transition-all [&>svg]:hover:fill-red-500">
                                    <PiSun size={20} />
                                    <p className="group-hover:text-red-500">
                                        روشن
                                    </p>
                                </div>
                                <div className=" group flex cursor-pointer items-center gap-3 transition-all [&>svg]:transition-all [&>svg]:hover:fill-red-500">
                                    <PiMoon size={20} />
                                    <p className="group-hover:text-red-500">
                                        تاریک
                                    </p>
                                </div>
                                <div className=" group flex cursor-pointer items-center gap-3 transition-all [&>svg]:transition-all [&>svg]:hover:fill-red-500">
                                    <PiChalkboardSimple size={20} />
                                    <p className="group-hover:text-red-500">
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
