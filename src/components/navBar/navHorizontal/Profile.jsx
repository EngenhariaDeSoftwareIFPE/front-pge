import React from 'react'
import Image from 'next/image'

import notificationBell from "./../../../../public/ph_bell.svg"

const Profile = () => {
  return (
    <div>
        <div className='flex me-7 items-center'>
            <div className="w-16 h-16 bg-zinc-300 rounded-full border-2 border-green-500" />
            <div className='ms-2'>
            <div className="text-center text-white text-sm font-semibold font-['Montserrat']">João Bosco</div>
            <div className="text-center text-white text-[10px] font-medium font-['Montserrat']">20221EWBJ0181</div>
            </div>
            <div className="w-7 h-7 relative ms-5">
            <Image
                src={notificationBell}
                alt="Notificações"
                className='h-full'
            />
            </div>
        </div>
    </div>
  )
}

export default Profile