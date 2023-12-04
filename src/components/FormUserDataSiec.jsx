"use client";

import * as d from "../data/formCadastreStudent"

import React, { useState } from 'react'
import ModalDeleteAccount from './ModalDeleteAccount'
import ButtonWhite from './ui/ButtonWhite';
import ButtonGreen from './ui/ButtonGreen';
import Modal from './Modal';
import ButtonRed from './ui/ButtonRed';
import { useRouter } from "next/navigation";

const widths = {
    buttonGreen: 'w-[150px]',
}
  
const height = {
    buttonGreen: 'h-[40px]',
}

const FormUserDataSiec = ({ onOpenDataChange, onOpenPasswordChange }) => {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [deletAccountModal, setDeletAccountModal] = useState(false)
    const [deletedAccountModal, setDeletedAccountModal] = useState(false)

    const handleDeletModal = () => {
        setShowModal(false);
        setDeletAccountModal(true);
    }

    const handleDeletedModal = () => {
        setDeletAccountModal(false);
        setDeletedAccountModal(true);
    }

    const onAccountDeleted = () => {
        router.push(d.paths.login)
    }

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
                    <div className="text-black text-lg font-medium mb-2">Função</div>
                    <div className="w-64 h-5 bg-green-500 rounded-xl text-sm font-medium flex items-center p-4">Diretor do SIEC</div>
                </div>
            </div>
        </div>
        <div className='bg-green-500 w-full h-[1px] mt-14'></div>
        <div className='mt-14 ms-14'>
            <h2 className=' text-black text-xl font-semibold'>Segurança</h2>
            <div className='flex space-x-6'>
                <button onClick={() => onOpenPasswordChange()} className="mt-3 w-44 h-10 bg-green-500 rounded-xl text-sm font-medium flex items-center p-3 justify-between">
                    <div className='flex'>
                        <img src="ic-lock.svg" alt="ícone cadeado" className='w-6'/>
                        <div className='flex flex-col items-start  ms-2'>
                            <div className='text-black text-14px font-semibold'>Senha</div>
                            <div className='text-black text-12px font-normal mt-[-5px]'>Alterar Senha</div>
                        </div>
                    </div>
                    <img src="ic-arrow-right.svg" alt="" />
                </button>
                <button onClick={() => setShowModal(true)} className="mt-3 w-44 h-10 bg-green-500 rounded-xl text-sm font-medium flex items-center p-3 justify-between">
                    <div className='flex justify-start items-center'>
                        <img src="ic-black-trash.svg" alt="ícone lata de lixo" className='w-6'/>
                        <div className='ms-2 text-black text-14px font-semibold'>Deletar conta</div>
                    </div>
                    <img src="ic-arrow-right.svg" alt="" />
                </button>
            </div>
        </div>
        <ModalDeleteAccount  bgColor={"bg-[#3AC25E]"} isVisible={showModal} onClose={() => setShowModal(false)}>
            <img className='w-[85px]' src="ic-shield-exclamation.svg" alt="Ícone exclamamção" />
            <p className='w-[85%] text-white text-xl font-medium text-center'>A exclusão da conta é permanente. Quando você excluir sua conta do Portal de Gestão de Estágio, seu perfil, dados e documentos serão removidos do sistema. Tenha certeza que não utilizará mais o portal antes de excluí-lo.</p>
            <div className='flex w-full justify-around'>
              <ButtonWhite
              text="Voltar"
              width={widths.buttonGreen}
              height={height.buttonGreen}
              onClick={() => setShowModal(false)}
              />
              <ButtonGreen
              text="Avançar"
              width={widths.buttonGreen}
              height={height.buttonGreen}
              onClick={() => handleDeletModal()}
              />
            </div>
        </ModalDeleteAccount>
        <Modal bgColor="bg-[#3AC25E]" isVisible={deletAccountModal} onClose={() => setDeletAccountModal(false)}>
          <img className='w-[85px]' src="ic-trash.svg" alt="Ícone lixeira" />
          <p className='text-white text-2xl font-medium'>Deseja excluir sua conta?</p>
          <div className='flex w-full justify-around'>
              <ButtonWhite
              text="Cancelar"
              width={widths.buttonGreen}
              height={height.buttonGreen}
              onClick={() => setDeletAccountModal(false)}
              />
              <ButtonRed
              text="Excluir"
              width={widths.buttonGreen}
              height={height.buttonGreen}
              onClick={() => handleDeletedModal()}
              />
          </div>
      </Modal>

      <Modal bgColor="bg-[#3AC25E]" isVisible={deletedAccountModal} onClose={() => onAccountDeleted()}>
          <img className='w-[85px]' src="ic-success.png" alt="Ícone sucesso" />
          <p className='text-white text-2xl font-medium'>Conta excluída com sucesso!</p>
          <div className='flex w-full justify-around'>
              <ButtonGreen
              text="OK"
              width={widths.buttonGreen}
              height={height.buttonGreen}
              onClick={() => onAccountDeleted()}
              />
          </div>
      </Modal>
    </div>
  )
}

export default FormUserDataSiec