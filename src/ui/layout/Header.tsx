import Profile from '../../Features/HeaderMenuList/Profile';

export default function Header() {
  return (
    <header className="col-[2/-1] ml-12 mt-12 flex h-full flex-row-reverse items-center rounded-md px-12 shadow-box">
      <Profile />
    </header>
  );
}
