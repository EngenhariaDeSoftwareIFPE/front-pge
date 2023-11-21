"use client";

import React, { useState } from 'react';
import InputChangePassword from './ui/InputChangePassword';
import * as d from "../data/formCadastreStudent"
import ButtonGreen from './ui/ButtonGreen';
import Modal from './Modal';

const widths = {
    buttonGreen: 'w-[180px]'
}

const height = {
    buttonGreen: 'h-[40px]',
}

const currentPassword = {
    label: "Senha atual",
    id: 'password',
    placeHolder: 'Digite a sua senha atual',
}
const newPassword = {
    label: "Nova senha",
    id: 'password',
    placeHolder: 'Digite uma nova senha',
    
}
const confirmPassword = {
    label: "Confirmação da senha",
    id: 'password',
    placeHolder: 'Confirme a sua nova senha',
}

const FormChangePassword = ({ onButtonClick }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='w-full h-[600px] flex items-center justify-center font-monteserrat'>
            <div className="h-[75%] w-[40%] bg-primary-green border-[5px] border-secundary-green rounded-[40px]">
                <button onClick={onButtonClick}>
                    <img src="ic-close.svg" alt="Botão para fechar edição de senha" className='w-8 mt-4 ms-4'/>
                </button>
                <div className='flex flex-col items-center mt-[-30px]'>
                    <h1 className="text-white text-[20px] font-semibold">Alteração de senha</h1>
                    <h2 className="text-white text-[16px] font-medium">Altere por uma senha segura!</h2>
                </div>
                <div className='w-full flex flex-col items-center h-[55%] justify-around mt-4'>
                    <InputChangePassword
                        id={currentPassword.id}
                        placeHolder={currentPassword.placeHolder}
                        label={currentPassword.label}
                        width={currentPassword.width}
                    />
                    <InputChangePassword
                        id={newPassword.id}
                        placeHolder={newPassword.placeHolder}
                        label={newPassword.label}
                        width={currentPassword.width}
                    />
                    <InputChangePassword
                        id={confirmPassword.id}
                        placeHolder={confirmPassword.placeHolder}
                        label={confirmPassword.label}
                        width={currentPassword.width}
                    />
                </div>
                <div className='w-full mt-6 flex justify-center'>
                    <ButtonGreen
                        text={d.buttonChangePassword.text}
                        width={widths.buttonGreen}
                        height={height.buttonGreen}
                        onClick={() => setShowModal(true)}
                    />
                </div>
            </div>
            <Modal bgColor={"bg-[#3AC25E]"} isVisible={showModal} onClose={() => setShowModal(false)}>
                <img className='w-[100px]' src="ic-shield-check.svg" alt="Ícone escudo de verificação" />
                <p className='text-white text-2xl font-medium'>Sua senha foi alterada com sucesso!</p>
                <ButtonGreen
                    text="OK"
                    width={widths.buttonGreen}
                    height={height.buttonGreen}
                    onClick={onButtonClick}
                />
            </Modal>
        </div>
    )
}

export default FormChangePassword