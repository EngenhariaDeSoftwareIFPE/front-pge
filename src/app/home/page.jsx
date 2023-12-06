import React from 'react';
import HoursChart from "@/components/HoursChart";
import NavBarHorizontal from "@/components/navBar/NavBarHorizontal";
import NavBarVertical from "@/components/navBar/NavBarVertical";
import SliderWelcome from "@/components/SliderWelcome";
import FrameLinks from "@/components/ui/FrameLinks";

export const metadata = {
    title: 'PGE | Home',
    description: 'Home PGE',
};

const Home = () => {
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
                <div id="conteudo" className="flex flex-row-reverse justify-end">
                    <div className="flex-col">
                        <SliderWelcome/>
                        <div className="flex">
                            <HoursChart/>
                            <div>
                                <FrameLinks/>
                            </div>
                        </div>
                    </div>
                    <NavBarVertical/>
                </div>
            </div>
        </>
    );
};

export default Home;
