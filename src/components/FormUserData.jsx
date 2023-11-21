import React from 'react'

const FormUserData = ({ onOpenDataChange, onOpenPasswordChange }) => {
  return (
    <div className='h-3/4 flex flex-col w-full'>
        <div className='ms-14'>
            <div className='flex mb-4'>
                <h2 className=' text-black text-xl font-semibold'>Dados cadastrais</h2>
                <button onClick={() => onOpenDataChange()}>
                    <img src="ic-pencil.svg" alt="Editar dados cadastrais" className="ms-3 w-4"/>
                </button>
            </div>
            <div className='flex w-full'>
                <div>
                    <div className="text-black text-lg font-medium mb-2">Nome completo</div>
                    <div className="w-96 h-8 bg-green-500 rounded-xl text-sm font-medium flex items-center p-4">João Bosco de Siqueira Filho</div>
                </div>
                <div className='ms-10'>
                    <div className="text-black text-lg font-medium mb-2">Matrícula</div>
                    <div className="w-56 h-5 bg-green-500 rounded-xl text-sm font-medium flex items-center p-4">20221EWBJ0181</div>
                </div>
            </div>
            <div className='flex w-full mt-5'>
                <div>
                    <div className="text-black text-lg font-medium mb-2">E-mail</div>
                    <div className="w-80 h-8 bg-green-500 rounded-xl text-sm font-medium flex items-center p-4">jbsf3@discent.ifpe.edu.br</div>
                </div>
                <div className='ms-10'>
                    <div className="text-black text-lg font-medium mb-2">Curso</div>
                    <div className="w-64 h-5 bg-green-500 rounded-xl text-sm font-medium flex items-center p-4">Técnico em Agropecuária</div>
                </div>
            </div>
        </div>
        <div className='bg-green-500 w-full h-[1px] mt-14'></div>
        <div className='mt-14 ms-14'>
            <h2 className=' text-black text-xl font-semibold'>Segurança</h2>
            <button onClick={() => onOpenPasswordChange()} className="mt-3 w-44 h-10 bg-green-500 rounded-xl text-sm font-medium flex items-center p-4 justify-between">
                <div className='flex'>
                    <img src="ic-lock.svg" alt="" className='w-6'/>
                    <div className='flex flex-col items-start  ms-2'>
                        <div className='text-black text-14px font-semibold'>Senha</div>
                        <div className='text-black text-12px font-normal mt-[-5px]'>Alterar Senha</div>
                    </div>
                </div>
                <img src="ic-arrow-right.svg" alt="" />
            </button>
        </div>
    </div>
  )
}

export default FormUserData