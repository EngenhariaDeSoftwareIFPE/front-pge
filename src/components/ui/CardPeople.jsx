"use client";

import { useState } from "react";

import ModalStage from "../ModalStage";

export default function CardPeople(props) {
    const data = {
        name: props.name,
        registrationNumber: props.registrationNumber,
        course: props.course,
        sector: props.sector,
    }

    const [ showModal, setShowModal ] = useState(false);

    const [hoveredStage, setHoveredStage] = useState(null);

    const handleClick = () => {
        if (data.course === 'Lic. em Música' && !data.sector) {
            setShowModal(true);
        }
    };

    return (
        <div 
            className="bg-secundary-green w-[331px] h-[78px] rounded-[12px] p-[10px] mt-[69px]"
            onClick={handleClick}
        >
            <div className="flex items-start">
                <img
                    src="../ic_user.svg"
                    alt="Icone usuário"
                />
                <p className="text-white font-medium text-[18px] ml-[5px]">{data.name}</p>
            </div>
            <p className="text-white font-medium text-[12px]">{data.sector ? `${data.sector} - ${data.course}` : data.course}</p>
            <p className="text-white font-medium text-[12px]">{data.registrationNumber}</p>
            <ModalStage bgColor={"bg-[#3AC25E]"} isVisible={showModal} onClose={() => setShowModal(false)} border={"border-4 border-[#185228]"}>
                <div className='relative w-full h-full flex items-center flex-col justify-center'>
                        <button onClick={(e) => { e.stopPropagation(); setShowModal(false); }} className="absolute left-[30px] top-[33px]">
                            <img src="ic-close.svg" alt="Botão para fechar edição de dados" className='w-8'/>
                        </button>
                        <p className='text-white text-[25px] font-medium mb-[40px]'>Deseja acessar qual estágio?</p>
                    <div className="grid grid-cols-2 gap-[37px]">
                        {[1, 2, 3, 4].map((stage) => (
                            <img
                                key={stage}
                                src={`../estagio${stage}${hoveredStage === stage ? '_hover' : ''}.svg`}
                                alt={`Estágio ${stage}`}
                                onMouseEnter={() => setHoveredStage(stage)}
                                onMouseLeave={() => setHoveredStage(null)}
                            />
                        ))}
                    </div>
                </div>
            </ModalStage>
        </div>
    )
}