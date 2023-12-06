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
                <NavBarHorizontal 
                    elementos={[
                    { title: 'Ver conteúdo', id: 'conteudo' },
                    { title: 'Ir para menu', id: 'menu' },
                    { title: 'Ir para perfil', id: 'perfil' }, 
                    ]}
                />
                <div id='conteudo' className="flex flex-row-reverse">
                    <FilesDownload/>
                    <NavBarVertical/>
                </div>
            </div>
        </>
  )
}

export default Arquivos