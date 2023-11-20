import React from 'react'

import Profile from '../ui/Profile'

const NavBarHorizontal = () => {
  return (
    <div>
        <div className="w-full h-28 bg-green-900 flex justify-between items-center">
            <a href="/home"><img src="pge_logo.png" alt="Logo do portal" className='w-40 ms-5' /></a>
            <Profile/>
        </div>
    </div>
  )
}

export default NavBarHorizontal