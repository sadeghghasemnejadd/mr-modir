import { Outlet } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Nav from './Nav';

export default function AppLayout() {
  return (
    <div className="grid grid-cols-[1fr_300px] grid-rows-[75px_1fr] p-12 gap-6 min-h-screen max-h-screen overflow-hidden">
      <Header />
      <Nav />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}
