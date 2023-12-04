import HandlePeople from '@/components/HandlePeople'
import NavBarHorizontal from "@/components/navBarSiec/NavBarHorizontal"
import NavBarVertical from "@/components/navBarSiec/NavBarVertical"

export const metadata = {
    title: 'PGE | Pessoas',
    description: 'Frequência PGE',
}

export default function Pessoas() {  
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
                <div className="flex flex-row">
                    <NavBarVertical/>
                    <HandlePeople />
                </div>
            </div>
        </>
    )
}