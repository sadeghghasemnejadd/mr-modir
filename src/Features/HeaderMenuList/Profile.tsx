import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  TbUserCheck,
  TbSettings,
  TbCreditCard,
  TbCalendarCheck,
} from 'react-icons/tb';

import {
  PiSignOut,
  PiCurrencyDollarSimpleLight,
  PiQuestionThin,
} from 'react-icons/pi';
import RolesEnum from '../../Enums/RolesEnum';
import Badge from '../../ui/components/Badge';
import Divider from '../../ui/components/Divider';
import HeaderDropdown from '../../ui/components/HeaderDropdown';

interface IProfileUtilsList {
  id: number;
  name: string;
  icon: ReactNode;
  route: string;
  badge?: string | number;
  badgeColor?: 'success' | 'error';
}
const profileUtilsList: IProfileUtilsList[] = [
  {
    id: 0,
    name: 'پروفایل من',
    icon: <TbUserCheck size={24} color="868e96" />,
    route: '/',
  },
  {
    id: 1,
    name: 'پروژه های من',
    icon: <TbCalendarCheck size={24} color="868e96" />,
    route: '/',
    badge: '5',
    badgeColor: 'success',
  },
  {
    id: 2,
    name: 'تنظیمات',
    icon: <TbSettings size={24} color="868e96" />,
    route: '/',
  },
  {
    id: 3,
    name: 'پرداخت',
    icon: <TbCreditCard size={24} color="868e96" />,
    route: '/',
    badge: '2',
    badgeColor: 'error',
  },
];
const profileSettingList: IProfileUtilsList[] = [
  {
    id: 0,
    name: 'سوالات متداول',
    icon: <PiQuestionThin size={24} color="868e96" />,
    route: '/',
  },
  {
    id: 1,
    name: 'قیمت گذاری',
    icon: <PiCurrencyDollarSimpleLight size={24} color="868e96" />,
    route: '/',
  },
  {
    id: 2,
    name: 'خروج',
    icon: <PiSignOut size={24} color="868e96" />,
    route: '/',
  },
];

export default function Profile() {
  return (
    <div className="flex items-center ">
      <HeaderDropdown>
        <HeaderDropdown.Thumbnail name="profile">
          <div className="relative">
            <img
              src="images/avatars/001.png"
              alt="avatar"
              className="w-12 h-12 rounded-full border border-red-900"
            />
            <span className="w-3 h-3 bg-green-500 rounded-full block absolute bottom-0 right-0 border border-transparent animate-ping " />
            <span className="w-3 h-3 bg-green-600 rounded-full block absolute bottom-0 right-0 border border-transparent " />
          </div>
        </HeaderDropdown.Thumbnail>
        <HeaderDropdown.DropBox name="profile">
          <div className="flex gap-6">
            <img
              src="images/avatars/001.png"
              alt="avatar"
              className="w-14 h-14 rounded-full border border-red-900"
            />
            <div className="text-right flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <p className="text-lg font-bold">صادق قاسم نژاد</p>
                <Badge text={RolesEnum.Admin} />
              </div>
              <p className="text-sm text-gray-500">
                ghasemnejad.sadegh@gmail.com
              </p>
            </div>
          </div>
          <Divider />
          <ul className="flex flex-col ">
            {profileUtilsList.map((profile) => (
              <li
                key={profile.id}
                className="flex items-center gap-3 hover:bg-red-100 py-3 px-3 group transition-all [&>svg]:hover:stroke-red-600"
              >
                {profile.icon}
                <Link
                  to={profile.route}
                  className="text-lg font-bold no-underline flex gap-3  group-hover:text-red-700"
                >
                  {profile.name}
                  {profile.badge && (
                    <Badge
                      text={profile.badge}
                      color={profile.badgeColor}
                      size="sm"
                      rounded
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Divider />
          <ul className="flex flex-col">
            {profileSettingList.map((profile) => (
              <li
                key={profile.id}
                className="flex items-center gap-3 hover:bg-red-100 py-3 px-3 rounded-lg group transition-all [&>svg]:hover:fill-red-600"
              >
                {profile.icon}
                <Link
                  to={profile.route}
                  className="text-lg font-bold no-underline flex gap-3 group-hover:text-red-700"
                >
                  {profile.name}
                  {profile.badge && (
                    <Badge
                      text={profile.badge}
                      color={profile.badgeColor}
                      size="sm"
                      rounded
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </HeaderDropdown.DropBox>
      </HeaderDropdown>
    </div>
  );
}
