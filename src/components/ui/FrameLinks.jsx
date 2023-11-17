"use client";

import React, { useState } from 'react';

const FrameLinks = () => {
  const [ifpeLogo, setIfpeLogo] = useState('ifpe_logo.png');

  const handleMouseOver = () => {
    setIfpeLogo('ifpe_logo2.png');
  };

  const handleMouseOut = () => {
    setIfpeLogo('ifpe_logo.png'); 
  };

  return (
    <div>
      <div className="w-[555px] mt-4 ms-3 h-[280px] font-monteserrat flex flex-col items-end justify-between">
        <div className='bg-green-900 rounded-xl h-[125px] w-[90%]'>
          <a
            href="https://portal.ifpe.edu.br/"
            target='_blank'
            className='w-full h-full rounded-xl flex items-center justify-center'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <img src={ifpeLogo} className='h-full' alt="" />
          </a>
        </div>

        <div className='bg-green-900 rounded-xl h-[125px] w-[90%] flex items-center justify-center'>
          <img src="youtube.svg" alt="Tutorial para uso do sistema" />
        </div>
      </div>
    </div>
  );
}

export default FrameLinks;
