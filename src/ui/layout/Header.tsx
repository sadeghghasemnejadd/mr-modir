import Profile from '../../Features/HeaderMenuList/Profile';

export default function Header() {
  return (
    <header className="col-[2/-1] h-full rounded-md shadow-box mt-12 ml-12 px-12 flex items-center flex-row-reverse">
      <Profile />
    </header>
  );
}
