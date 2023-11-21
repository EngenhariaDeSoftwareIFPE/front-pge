"use client";

import React, {useState} from 'react';
import InputCadastreStudent from './ui/InputCadastreStudent';
import * as d from "../data/FormCadastreStudent";
import ButtonGreen from './ui/ButtonGreen';
import Modal from './Modal';

const widths = {
    fullname: 'w-[440px]',
    registrationNumber: 'w-[250px]',
    email: 'w-[386px]',
    course: 'w-[319px]',
    buttonGreen: 'w-[150px]'
}

const height = {
    buttonGreen: 'h-[40px]',
}

const FormDataChange = ({ onButtonClick }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='w-full h-[600px] flex items-center justify-center font-monteserrat'>
        <div className="h-[65%] w-1/2 bg-primary-green border-[5px] border-secundary-green rounded-[40px]">
            <button onClick={onButtonClick}>
                <img src="ic-close.svg" alt="Botão para fechar edição de dados" className='w-8 mt-4 ms-4'/>
            </button>
            <div className='flex flex-col items-center mt-[-30px]'>
                <h1 className="text-white text-[18px] font-semibold">Dados cadastrais</h1>
                <h2 className="text-white text-[16px] font-medium">Se atente e edite seus dados corretamente</h2>
            </div>
            <div className='flex mt-7 w-full justify-between px-3'>
                <InputCadastreStudent
                    id={d.fullName.id}
                    label={d.fullName.label}
                    placeHolder={d.fullName.placeHolder}
                    width={widths.fullname}
                />
                <InputCadastreStudent
                    id={d.registrationNumber.id}
                    label={d.registrationNumber.label}
                    placeHolder={d.registrationNumber.placeHolder}
                    width={widths.registrationNumber}
                />
            </div>
            <div className='flex mt-7 w-full justify-between px-3'>
                <InputCadastreStudent
                    id={d.email.id}
                    label={d.email.label}
                    placeHolder={d.email.placeHolder}
                    width={widths.email}
                />
                <InputCadastreStudent
                    id={d.course.id}
                    label={d.course.label}
                    placeHolder={d.course.placeHolder}
                    width={widths.course}
                />
            </div>
            <div className='w-full flex justify-center mt-10'>
                <ButtonGreen
                    text={d.buttonSave.text}
                    width={widths.buttonGreen}
                    height={height.buttonGreen}
                    onClick={() => setShowModal(true)}
                />
            </div>
        </div>
        <Modal bgColor={"bg-[#3AC25E]"} isVisible={showModal} onClose={() => setShowModal(false)}>
            <img className='w-[100px]' src="ic-shield-check.svg" alt="Ícone escudo de verificação" />
            <p className='text-white text-2xl font-medium'>Dados alterados com sucesso!</p>
            <ButtonGreen
                text="OK"
                width={widths.buttonGreen}
                height={height.buttonGreen}
                onClick={onButtonClick}
            />
        </Modal>
    </div>
  );
};

export default FormDataChange;
