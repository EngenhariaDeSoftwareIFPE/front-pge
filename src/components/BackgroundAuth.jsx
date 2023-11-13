export default function BackgroundAuth({component}) {
    const data = {
        component: component,
        title: 'PORTAL DE GESTÃO DE ESTÁGIO:',
        subtitle: 'O ESTÁGIO NA PALMA DA SUA MÃO',
    }

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-t from-gradient-primary via-gradient-secundary to-white">
            <div className="bg-primary-green w-550px h-550px rounded-40px">
                {component}
            </div>
            <div className="flex flex-col items-center justify-center bg-secundary-green w-450px h-450px rounded-40px-right">
                <img src="logo-auth.svg" alt="Logo do Pge"/>
                <p className="text-white text-16px font-monteserrat w-298px">{data.title}</p>
                <p className="text-white text-16px font-monteserrat w-298px">{data.subtitle}</p>
            </div>
        </div>
    )
}
