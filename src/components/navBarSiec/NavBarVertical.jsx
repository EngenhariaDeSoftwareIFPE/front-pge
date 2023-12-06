"use client";

import React, { useState, useEffect } from 'react';
import Modal from '../Modal';
import ButtonWhite from '../ui/ButtonWhite';
import ButtonRed from '../ui/ButtonRed';

const widths = {
  buttonGreen: 'w-[150px]'
}

const height = {
  buttonGreen: 'h-[40px]',
}

const NavBarVertical = () => {
  const [menuItems] = useState([
    { label: 'Home', icon: 'ic-home.svg', link: '/siec' },
    { label: 'Pessoas', icon: 'ic-user.svg', link: '/pessoas' },
    { label: 'Estágios', icon: 'ic-physics.svg', link: '/estagios' },
    { label: 'Arquivos', icon: 'ic-folder.svg', link: '/arquivos_siec' }
  ]);

  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const [showModal, setShowModal] = useState(false);

  return (
    <div id='menu' className="w-52 min-h-[617px] bg-green-500 flex flex-col justify-between">
      <div className="w-10/12 h-32 mt-14">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className={`flex h-8 mb-1 text-white font-semibold text-sm items-center rounded-e-md ${
                  currentPath === item.link ? 'bg-barra-de-navegacao' : ''
                }`}
              >
                <img className="me-1 ms-7" src={item.icon} alt={`ícone para tela de ${item.label}`} />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => setShowModal(true)} className="flex w-full mb-14 text-white font-semibold text-sm justify-center">
        <img className="me-2" src="ic-sign-out.svg" alt="Ícone logout" />
        Sair
      </button>
      <Modal bgColor="bg-[#3AC25E]" isVisible={showModal} onClose={() => setShowModal(false)}>
          <img className='w-[85px]' src="ic-sign-out.svg" alt="Ícone logout" />
          <p className='text-white text-2xl font-medium'>Tem certeza que deseja sair do sistema?</p>
          <div className='flex w-full justify-around'>
            <ButtonWhite
              text="Cancelar"
              width={widths.buttonGreen}
              height={height.buttonGreen}
              onClick={() => setShowModal(false)}
            />
            <ButtonRed
              text="Sair"
              width={widths.buttonGreen}
              height={height.buttonGreen}
              onClick={() => setShowModal(true)}
            />
          </div>
      </Modal>
    </div>
  );
};

export default NavBarVertical;
