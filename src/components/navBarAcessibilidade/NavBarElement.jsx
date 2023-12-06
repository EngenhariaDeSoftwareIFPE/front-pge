import React from 'react';

const NavBarElement = ({ number, title, id }) => {
    return (
        <button className='flex space-x-1' onClick={() => scrollToSection(id)}>
            <div className=" h-[13.43px] text-righ text-xs font-semibold">
                {title}
            </div>
            <div className="px-[5px] h-[15px] text-xs font-semibold bg-green-500">
                {number}
            </div>
        </button>
    );
};

const scrollToSection = (id) => {
    const section = document.querySelector(id);

    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
        });
    }
};

export default NavBarElement;
