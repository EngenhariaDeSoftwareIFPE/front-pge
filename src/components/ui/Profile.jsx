import { userAgent } from 'next/server'
import React from 'react'

const Profile = () => {
  const userData = {
    name: "João Bosco",
    tuition: "20221EWBJ0181"
  }

  return (
    <div>
        <div className='flex me-11 items-center'>
            <div className="w-16 h-16 bg-zinc-300 rounded-full border-2 border-green-500" />
            <div className='me-5 ms-2'>
              <div className="text-center text-white font-semibold text-sm font-monteserra">{userData.name}</div>
              <div className="text-center text-white text-[10px] font-medium font-monteserra">{userData.tuition}</div>
            </div>
            <div className="w-7 h-7 relative ms-5">
              <img src="ph_bell.svg" alt="Notificações" className='h-full' />
            </div>
        </div>
    </div>
  )
}

export default Profile