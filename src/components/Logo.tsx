import { useNavigate } from 'react-router';
import { RIcon } from '../assets/index';
import { MIcon } from '../assets/index';
import { Ampersand } from '../assets/index';

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className='  cursor-pointer ' onClick={() => navigate('/')}>
      <div className='flex flex-nowrap'>
        <div className=' w-10 h-10 '>
          <img src={MIcon} alt='' />
        </div>

        <div className=' w-7 h-7 mt-3'>
          <img src={Ampersand} alt='' className=' -ml-1' />
        </div>
        <div className=' w-10 h-10'>
          <img src={RIcon} alt='' className=' -ml-1' />
        </div>
      </div>
    </div>
  );
};
