import { useNavigate } from 'react-router';
import { Profil } from '../assets/index';
import { BurgerMenu } from './BurgerMenu';

export const Head = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white py-4 px-6 shadow-md'>
      <div className='flex items-center justify-between w-full md:w-auto mb-4 md:mb-0'>
        <div
          className='cursor-pointer flex items-center'
          onClick={() => navigate('/')}
        >
          <div className='flex items-center space-x-2'>
            <div className='text-2xl font-bold'>R</div>
            <div className='text-2xl font-bold'>&</div>
            <div className='text-2xl font-bold'>M</div>
          </div>
        </div>
        <div className='md:hidden'>
          <BurgerMenu />
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <div
          className='cursor-pointer flex items-center'
          onClick={() => navigate('/settings')}
        >
          <img src={Profil} alt='Profile' className='h-8 w-8 rounded-full' />
          <h3 className='text-sm ml-2'>Guest</h3>
        </div>
        <div className='hidden md:block'>
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
};
