import React from 'react';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 p-5 rounded-lg shadow-lg'>
        <h2 className='text-xl font-bold text-gray-800 mb-4'>
          Вы уверены, что хотите это сделать?
        </h2>
        <div className='flex flex-col sm:flex-row justify-between'>
          <Button isDisabled={false} label='Да' onClick={onConfirm} />
          <Button isDisabled={false} label='Отмена' onClick={onClose} />
        </div>
      </div>
    </div>
  );
};
