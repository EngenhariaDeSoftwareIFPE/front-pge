export default function BackgroundAuth() {
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="bg-primary-green w-550px h-550px rounded-40px"/>
            <div className="flex flex-col items-center justify-center bg-secundary-green w-450px h-450px rounded-40px-right">
                <img src="logo-auth.svg" alt="Logo do Pge"></img>
                <p className="text-white text-16px font-monteserrat w-298px">PORTAL DE GESTÃO DE ESTÁGIO:</p>
                <p className="text-white text-16px font-monteserrat w-298px">O ESTÁGIO NA PALMA DA SUA MÃO</p>
            </div>
        </div>
    )
}
