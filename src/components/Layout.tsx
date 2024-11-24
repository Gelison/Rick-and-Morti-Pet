import { Outlet } from 'react-router';
import { Head } from './Head';

export const Layout = () => {
  return (
    <>
      <div className='p-10 bg-blue-100'>
        <div>
          <Head />
        </div>
      </div>
      <Outlet />
    </>
  );
};
