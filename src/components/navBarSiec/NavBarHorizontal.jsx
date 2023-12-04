import React from 'react'

import ProfileSiec from '../ui/ProfileSiec'

const NavBarHorizontal = () => {
  return (
    <div>
        <div className="w-full h-28 bg-green-900 flex justify-between items-center">
            <a href="/siec"><img src="pge_logo.png" alt="Logo do portal" className='w-40 ms-5' /></a>
            <ProfileSiec/>
        </div>
    </div>
  )
}

export default NavBarHorizontal