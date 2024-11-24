import { useNavigate } from 'react-router';
import { Logo } from './Logo';
import { Search } from './Search';

export const Head = () => {
  const navigate = useNavigate();
  return (
    <div className=' flex justify-between '>
      <div>
        <Logo />
      </div>
      <div>
        <Search />
      </div>
      <div className='  cursor-pointer ' onClick={() => navigate('/login')}>
        <h3 className=' font-semibold mx-5 my-2'>Sing in</h3>
      </div>
    </div>
  );
};
