import React from 'react'
import Image from 'next/image'

import pgeLogo from "./../../../../public/pge_logo.png"

import Profile from './Profile'

const NavBarHorizontal = () => {
  return (
    <div className='h-full'>
        <div className="w-full h-28 bg-green-900 flex justify-between items-center">
            <Image
                src={pgeLogo}
                alt="Logo do portal"
                className='h-full'
            />
            <Profile/>
        </div>
    </div>
  )
}

export default NavBarHorizontal