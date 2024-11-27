import { Button } from '../components/Button';
import { Toggle } from '../components/Toggle';

export const Settings = () => {
  const handlePrimaryButtonClick = () => {
    console.log('clicked');
  };

  return (
    <div className='container mx-auto px-4 py-10'>
      <div className='mb-8'>
        <h3 className='text-2xl font-bold mb-4'>Profile</h3>
        <div className='bg-gray-800 p-6 rounded-md shadow-md'>
          <div className='flex flex-col md:flex-row md:justify-between'>
            <div className='mb-4 md:mb-0 md:w-1/2'>
              <label
                className='block text-sm font-medium text-white mb-2'
                htmlFor='name'
              >
                Name
              </label>
              <input
                id='name'
                type='text'
                className='bg-gray-700 border border-gray-600 text-white text-sm rounded-md block w-full p-2.5'
                placeholder='Name'
              />
            </div>
            <div className='md:w-1/2'>
              <label
                className='block text-sm font-medium text-white mb-2'
                htmlFor='email'
              >
                Email
              </label>
              <input
                id='email'
                type='email'
                className='bg-gray-700 border border-gray-600 text-white text-sm rounded-md block w-full p-2.5'
                placeholder='Email'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='mb-8'>
        <h3 className='text-2xl font-bold mb-4'>Password</h3>
        <div className='bg-gray-800 p-6 rounded-md shadow-md'>
          <div className='mb-4'>
            <label
              className='block text-sm font-medium text-white mb-2'
              htmlFor='current-password'
            >
              Current Password
            </label>
            <input
              id='current-password'
              type='password'
              className='bg-gray-700 border border-gray-600 text-white text-sm rounded-md block w-full p-2.5'
              placeholder='Current Password'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-sm font-medium text-white mb-2'
              htmlFor='new-password'
            >
              New Password
            </label>
            <input
              id='new-password'
              type='password'
              className='bg-gray-700 border border-gray-600 text-white text-sm rounded-md block w-full p-2.5'
              placeholder='New Password'
            />
          </div>
          <div>
            <label
              className='block text-sm font-medium text-white mb-2'
              htmlFor='confirm-password'
            >
              Confirm New Password
            </label>
            <input
              id='confirm-password'
              type='password'
              className='bg-gray-700 border border-gray-600 text-white text-sm rounded-md block w-full p-2.5'
              placeholder='Confirm New Password'
            />
          </div>
        </div>
      </div>

      <div className='mb-8'>
        <h3 className='text-2xl font-bold mb-4'>Color Mode</h3>
        <div className='bg-gray-800 p-6 rounded-md shadow-md'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-white'>Dark Mode</p>
              <p className='text-xs text-gray-400'>Use dark theme</p>
            </div>
            <Toggle onClick={handlePrimaryButtonClick} />
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <Button
          label='Save'
          isDisabled={false}
          onClick={handlePrimaryButtonClick}
        />
      </div>
    </div>
  );
};
