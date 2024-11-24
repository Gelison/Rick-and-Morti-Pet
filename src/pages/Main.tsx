import { useNavigate } from 'react-router';
import { ChatacterImg, EpisodeImg, locateImg } from '../assets';
import { Card } from '../components/Card';
import { Layout } from '../components/layout';

export const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Layout />

        <div className='flex min-w-96 justify-center mt-20 '>
          <Card
            name='Characters'
            img={ChatacterImg}
            onClick={() => navigate('/characters')}
          />
          <Card
            name='Locations'
            img={locateImg}
            onClick={() => navigate('/locations')}
          />
          <Card
            name='Episodes'
            img={EpisodeImg}
            onClick={() => navigate('/episodes')}
          />
        </div>
      </div>
    </div>
  );
};
