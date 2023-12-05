import React, { useState } from 'react';
import InputCadastreSignatorie from './ui/InputCadastreSignatorie';
import SelectCadastreStudentSiec from './ui/SelectCadastreStudentSiec';
import ButtonWhite from './ui/ButtonWhite';
import ButtonGreen from './ui/ButtonGreen';
import Modal from './Modal';

const ModelCadastreSignatorie = ({ isVisible, onClose }) => {
    if ( !isVisible ) return null;

    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
 
    const sector = [
        'Coordenador do curso de licenciatura em música',
        'Coordenador do curso de tecnico em agropecuária',
        'Coordenador do curso de tecnico em agroindustria',
        'Coordenador do SIEC',
    ]

    const course = [
        'Técnico de Agropecuária',
        'Técnico de Agroindústria',
        'Licenciatura em Música',
    ]

    const [showModal, setShowModal] = useState(false);

    return (
    <div id='wrapper' onClick={handleClose} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[965px] h-[544px] bg-primary-green border-4 border-[#185228] rounded-[40px] pl-[54px] pb-[47px]'>
            <div className='w-full relative'>
                <button onClick={() => onClose()} className="absolute right-[21px] top-[21px]">
                    <img src="ic-close.svg" alt="Botão para fechar edição de dados" className='w-8'/>
                </button>
            </div>
            <div className='text-white mt-[47px]'>
                <h1 className='font-semibold text-[26px]'>Olá, cadastre um signatário!</h1>
                <h2 className='font-medium text-[18px] mb-[25px]'>Insira os dados</h2>
            </div>
            <div className='flex'>
                <InputCadastreSignatorie
                    label={'Nome completo'}
                    width={'w-[440px]'}
                    placeHolder={'Insira o nome'}
                    mr={'mr-[38px]'}
                    mb={'mb-[38px]'}
                />
                <InputCadastreSignatorie
                    label={'Matricula'}
                    width={'w-[265px]'}
                    placeHolder={'Insira a matrícula'}
                    mb={'mb-[38px]'}
                />
            </div>
            <div className='flex'>     
                <InputCadastreSignatorie
                    label={'E-mail'}
                    width={'w-[386px]'}
                    placeHolder={'Insira o e-mail'}
                    mr={'mr-[38px]'}
                    mb={'mb-[38px]'}
                />
                <SelectCadastreStudentSiec 
                    options={sector}
                    label={'Cargo'}
                    placeHolder={'Selecione o cargo'}
                    width={'w-[319px]'}
                />
            </div>
            <div className='flex'>
                <SelectCadastreStudentSiec 
                    options={course}
                    label={'Curso'}
                    placeHolder={'Selecione o seu curso'}
                    width={'w-[319px]'}
                />
            </div>
            <div className="flex justify-center mt-[56px]">
                <ButtonWhite
                    text={'Cancelar'}
                    width={'w-[140px]'}
                    height={'h-[44px]'}
                    mr={'mr-[62px]'}
                    onClick={() => onClose()}
                />
                <ButtonGreen
                    text={'Cadastrar'}
                    width={'w-[140px]'}
                    height={'h-[44px]'}
                    onClick={() => setShowModal(true)}
                />
            </div>
        </div>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} bgColor={'bg-primary-green'}>
            <div className='flex flex-col items-center'>
                <img
                    src='../confirmed_data.svg'
                    alt='Imagem confirmado'
                />
                <p className='text-white font-medium text-[25px] my-[35px]'>Conta criada com sucesso!</p>
                <ButtonGreen
                    text={'OK'}
                    width={'w-[140px]'}
                    height={'h-[44px]'}
                    onClick={() => onClose()}
                />
            </div>
        </Modal>
    </div>
    )
}

export default ModelCadastreSignatorie