import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { Modal } from './Modal';

export function NavBar() {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [pendingPath, setPendingPath] = useState<string | null>(null);

  const handleOpenModal = (path: string) => {
    setPendingPath(path);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setPendingPath(null);
  };

  const handleConfirm = () => {
    if (pendingPath) {
      navigate(pendingPath);
    }
    setModalOpen(false);
    setPendingPath(null);
  };

  const handleNavLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string
  ) => {
    event.preventDefault();
    handleOpenModal(path);
  };

  return (
    <div className='fixed top-[14] left-0 right-0 w-full bg-purple-950 bg-opacity-90 z-50 shadow-lg'>
      <nav className='container mx-auto flex flex-col md:flex-row justify-between items-center py-4'>
        <NavLink
          to='/'
          onClick={(event) => handleNavLinkClick(event, '/')}
          className='hover:text-primary text-gray-100 text-xl font-sans py-2 md:py-0'
        >
          Home
        </NavLink>
        <NavLink
          to='/location'
          onClick={(event) => handleNavLinkClick(event, '/location')}
          className='hover:text-primary text-gray-100 text-xl font-sans py-2 md:py-0'
        >
          Location
        </NavLink>
        <NavLink
          to='/episode'
          onClick={(event) => handleNavLinkClick(event, '/episode')}
          className='hover:text-primary text-gray-100 text-xl font-sans py-2 md:py-0'
        >
          Episode
        </NavLink>
        <NavLink
          to='/follow'
          onClick={(event) => handleNavLinkClick(event, '/follow')}
          className='hover:text-primary text-gray-100 text-xl font-sans py-2 md:py-0'
        >
          Follow
        </NavLink>
      </nav>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
      />
    </div>
  );
}
