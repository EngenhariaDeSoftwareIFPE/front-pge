import React from 'react';
import NavBarHorizontal from "@/components/navBarSiec/NavBarHorizontal";
import HandleUserDataSiec from '@/components/HandleUserDataSiec';

export const metadata = {
    title: 'PGE | Dados do SIEC',
    description: 'Dados do SIEC PGE',
}

const Perfil = () => {
  return (
    <div className="w-screen h-screen font-monteserrat">
        <NavBarHorizontal 
          elementos={[
            { title: 'Ver conteúdo', id: 'conteudo' },
            { title: 'Ir para menu', id: 'menu' }, 
          ]}
        />
        <HandleUserDataSiec/>
    </div>
  )
}

export default Perfil