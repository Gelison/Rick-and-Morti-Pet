type CardType = {
  img: string;
  name: string;
  onClick: () => void;
};

export const Card = ({ img, name, onClick }: CardType) => {
  return (
    <div onClick={onClick} className=' cursor-pointer'>
      <div className='bg-gray-100 mx-32 w-64 h-72 rounded-lg border-[1px] border-blue-500'>
        <img src={img} alt='' className='rounded-lg w-[254px] h-[250px]' />
        <div className=' flex justify-center'>{name}</div>
      </div>
    </div>
  );
};
