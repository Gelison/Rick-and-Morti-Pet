import { Outlet } from 'react-router-dom';
import { Head } from './Head';
import { NavBar } from './Navbar';

export const Layout = () => {
  return (
    <>
      <div className='mx-14 my-10'>
        <div>
          <Head />
        </div>
        <div>
          <NavBar />
        </div>
      </div>
      <Outlet />
    </>
  );
};
