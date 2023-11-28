import HandleDocuments from '@/components/HandleDocuments'
import NavBarHorizontal from '@/components/navBar/NavBarHorizontal'
import NavBarVertical from '@/components/navBar/NavBarVertical'
import React from 'react'

export const metadata = {
    title: 'PGE | Documentos',
    description: 'Documentos PGE',
}

const Documentos = () => {
       
  return (
    <>
            <div className="w-screen h-screen font-monteserrat">
                <NavBarHorizontal/>
                <div className="flex flex-row-reverse">
                    <HandleDocuments/>
                    <NavBarVertical/>
                </div>
            </div>
        </>
  )
}

export default Documentos