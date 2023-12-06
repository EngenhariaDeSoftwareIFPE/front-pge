import NavBarAcessibilidadeForm from "./navBarAcessibilidade/NavBarAcessibilidadeForm";

export default function BackgroundSquare({component}) {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-t from-gradient-primary via-gradient-secundary to-white">
           <NavBarAcessibilidadeForm
                elementos={[
                    { title: 'Ir para formulário', id: 'formulario' },
                ]}
            />
           <div id="formulario" className="bg-primary-green border-[5px] border-secundary-green rounded-[40px] mb-[3%]">
                {component}
           </div>
        </div>
    )
}