"use client";

import React, { useState, useEffect } from 'react';

const NavBarVertical = () => {
  const [menuItems] = useState([
    { label: 'Home', icon: 'ic-home.svg', link: '/home' },
    { label: 'Frequência', icon: 'ic-book.svg', link: '/frequencia' },
    { label: 'Documentos', icon: 'ic-document.svg', link: '/documento' }
  ]);

  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div className="w-52 h-[617px] bg-green-500 flex flex-col justify-between">
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
      <button className="flex w-full mb-14 text-white font-semibold text-sm justify-center">
        <img className="me-2" src="ic-sign-out.svg" alt="fazer logout" />
        Sair
      </button>
    </div>
  );
};

export default NavBarVertical;
