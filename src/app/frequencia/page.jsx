import FrequencyTable from '@/components/FrequencyTable'
import NavBarHorizontal from '@/components/navBar/NavBarHorizontal'
import NavBarVertical from '@/components/navBar/NavBarVertical'
import React from 'react'

export const metadata = {
    title: 'PGE | Frequência',
    description: 'Frequência PGE',
}

const Frequencia = () => {
       
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
                <div className="flex flex-row-reverse justify-end">
                    <FrequencyTable/>
                    <NavBarVertical/>
                </div>
            </div>
        </>
  )
}

export default Frequencia