import FilesDownload from '@/components/FilesDownload'
import NavBarHorizontal from '@/components/navBar/NavBarHorizontal'
import NavBarVertical from '@/components/navBar/NavBarVertical'
import React from 'react'

export const metadata = {
    title: 'PGE | Arquivos',
    description: 'Arquivos PGE',
}

const Arquivos = () => {
       
  return (
    <>
            <div className="w-screen h-screen font-monteserrat">
                <NavBarHorizontal/>
                <div className="flex flex-row-reverse">
                    <FilesDownload/>
                    <NavBarVertical/>
                </div>
            </div>
        </>
  )
}

export default Arquivos