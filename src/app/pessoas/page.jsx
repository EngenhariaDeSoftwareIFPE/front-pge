import HandlePeople from '@/components/HandlePeople'
import NavBarHorizontal from '@/components/navBar/NavBarHorizontal'
import NavBarVertical from '@/components/navBar/NavBarVertical'
import React from 'react'

export const metadata = {
    title: 'PGE | Pessoas',
    description: 'Frequência PGE',
}

export default function Pessoas() {  
  return (
        <>
            <div className="w-screen h-screen font-monteserrat">
                <NavBarHorizontal/>
                <div className="flex flex-row-reverse justify-end">
                    <HandlePeople />
                    <NavBarVertical/>
                </div>
            </div>
        </>
    )
}