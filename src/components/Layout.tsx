import { Outlet } from 'react-router';
import { Head } from './Head';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <header className='bg-gray-900 text-white py-4 shadow-lg'>
          <div className='max-w-full px-4 sm:px-6 lg:px-8 mx-auto'>
            <Head />
          </div>
        </header>

        <main className='flex-grow max-w-full px-4 sm:px-6 lg:px-8 mx-auto py-10'>
          <Outlet />
        </main>

        <footer className='bg-gray-800 text-white py-6 shadow-md'>
          <div className='max-w-full px-4 sm:px-6 lg:px-8 mx-auto'>
            <Footer />
          </div>
        </footer>
      </div>
    </>
  );
};
