import { useState } from "react";
import ModelCadastreSignatorie from "../ModelCadastreSignatorie";

export default function ButtonAddSignatorie() {
    const [showModel, setShowModel] = useState(false)

    return (
        <>  
            <button 
                className="flex items-center p-[10px] w-[240px] h-[44px] rounded-[10px] font-bold text-white bg-secundary-green drop-shadow-xl hover:bg-[#186611]"
                onClick={() => setShowModel(true)}
            >
                <img
                    src="../icon_user_add.svg"
                />
                Adicionar Signatário
            </button>
            <ModelCadastreSignatorie isVisible={showModel} onClose={() => setShowModel(false)}/>
        </>
    )
}