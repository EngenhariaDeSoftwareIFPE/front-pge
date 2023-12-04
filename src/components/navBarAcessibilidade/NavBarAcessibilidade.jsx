"use client";

import React, { useEffect } from 'react';
import NavBarElement from './NavBarElement';

const NavBarAcessibilidade = ({ elementos }) => {
    useEffect(() => {
        const handleKeyPress = (event) => {
            // Mapeie os elementos e verifique se a tecla pressionada corresponde a algum deles
            elementos.forEach((elemento, index) => {
                if (event.key === (index + 1).toString()) {
                    // Construa o seletor da seção com base no ID do elemento
                    const sectionSelector = `#${elemento.id}`;

                    // Verifique se a seção com o seletor existe
                    const section = document.querySelector(sectionSelector);

                    // Se a seção existir, role até ela
                    if (section) {
                        section.scrollIntoView({
                            behavior: 'smooth', // Adicione rolagem suave se desejar
                        });
                    }
                }
            });
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [elementos]);

    return (
        <div className='flex  space-x-4 font-montserrat mt-2 h-full text-white'>
            {elementos.map((elemento, index) => (
                <NavBarElement id={elemento.id} number={index + 1} title={elemento.title} />
            ))}
        </div>
    );
};

export default NavBarAcessibilidade;
