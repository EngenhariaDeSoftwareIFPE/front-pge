import * as d from "../data/backgroundAuth"
import NavBarAcessibilidadeForm from "./navBarAcessibilidade/NavBarAcessibilidadeForm"

export default function BackgroundAuth({component}) {
    return (
        <div className="flex flex-col items-center w-screen h-screen bg-gradient-to-t from-gradient-primary via-gradient-secundary to-white">
            <NavBarAcessibilidadeForm
                elementos={[
                    { title: 'Ir para formulário', id: 'formulario' },
                ]}
            />
            <div className="flex items-center justify-center mb-[5%]">
                <div id="formulario" className="bg-primary-green w-[550px] h-[550px] rounded-[40px]">
                    {component}
                </div>
                <div className="flex flex-col items-center justify-center bg-secundary-green w-[450px] h-[450px] rounded-r-[40px]">
                    <img
                        src="logo-auth.svg"
                        alt="Logo do Pge"
                    />
                    <p className="text-white text-[16px] font-monteserrat w-[298px]">{d.data.title}</p>
                    <p className="text-white text-[16px] font-monteserrat w-[298px]">{d.data.subtitle}</p>
                </div>
            </div>
        </div>
    )
}
