import HoursChart from "@/components/HoursChart"
import NavBarHorizontal from "@/components/navBarSiec/NavBarHorizontal"
import NavBarVertical from "@/components/navBarSiec/NavBarVertical"
import SliderWelcome from "@/components/SliderWelcome"
import FrameLinksSiec from "@/components/ui/FrameLinksSiec"

export const metadata = {
    title: 'PGE | Home',
    description: 'Home PGE',
}

export default function Home() {
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
                    <div className="flex-col" id="conteudo">
                        <SliderWelcome/>
                        <FrameLinksSiec/>   
                    </div>
                    <NavBarVertical/>
                </div>
            </div>
        </>
    )
}

