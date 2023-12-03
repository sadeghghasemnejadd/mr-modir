import { PiClockCounterClockwise } from 'react-icons/pi'
import Drawer from '../../ui/components/Drawer'

export default function Activity() {
    return (
        <li>
            <Drawer direction="left">
                <Drawer.Thumbnail name="activity">
                    <span className="flex-center svg-duration-100 [&>svg]:hover:fill-primary-500">
                        <PiClockCounterClockwise size={30} />
                    </span>
                </Drawer.Thumbnail>
                <Drawer.Box
                    name="activity"
                    title="آخرین فعالیت ها"
                    footerButtonOption={{
                        path: '/',
                        children: 'مشاهده همه فعالیت ها',
                    }}
                >
                    <div>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                    </div>
                </Drawer.Box>
            </Drawer>
        </li>
    )
}
