import * as d from "../data/backgroundAuth"

export default function BackgroundAuth({component}) {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-t from-gradient-primary via-gradient-secundary to-white">
            <div className="bg-primary-green w-[550px] h-[550px] rounded-[40px]">
                {component}
            </div>
            <div className="flex flex-col items-center justify-center bg-secundary-green w-[450px] h-[450px] rounded-r-[40px]">
                <img 
                    src="logo-auth.svg" 
                    alt="Logo do Pge"
                />
                <p className="text-white text-[16px] font-medium w-[320px]">{d.data.title}</p>
                <p className="text-white text-[16px] font-medium w-[320px] text-center">{d.data.subtitle}</p>
            </div>
        </div>
    )
}
