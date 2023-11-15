export default function BackgroundSquare({component}) {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-t from-gradient-primary via-gradient-secundary to-white">
           <div className="bg-primary-green border-[5px] border-secundary-green rounded-[40px]">
                {component}
           </div>
        </div>
    )
}