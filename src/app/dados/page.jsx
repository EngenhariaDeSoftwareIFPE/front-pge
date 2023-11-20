import React from 'react';
import NavBarHorizontal from "@/components/navBar/NavBarHorizontal";
import HandleUserData from '@/components/HandleUserData';

export const metadata = {
  title: 'PGE | Dados do Usuário',
  description: 'Dados do Usuário PGE',
}

const Dados = () => {
    return (
    <>
      <div className="w-screen h-screen font-monteserrat">
        <NavBarHorizontal />
        <HandleUserData/>
      </div>
    </>
  );
}

export default Dados;
