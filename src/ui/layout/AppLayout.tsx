import { Outlet } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Nav from './Nav';

export default function AppLayout() {
  return (
    <div className="grid max-h-screen min-h-screen grid-cols-[300px_1fr] grid-rows-[75px_1fr] gap-6 overflow-hidden">
      <Header />
      <Nav />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}
