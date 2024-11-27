import React, { useState, useEffect, useRef } from 'react';
import { NavBar } from './NavBar';

export const BurgerMenu: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className='relative'>
      <div className='space-y-2 cursor-pointer p-2' onClick={toggleMenu}>
        <div className='w-8 h-1 rounded-full bg-primary'></div>
        <div className='w-8 h-1 rounded-full bg-primary'></div>
        <div className='w-8 h-1 rounded-full bg-primary'></div>
      </div>
      {isMenuVisible && <NavBar />}
    </div>
  );
};
