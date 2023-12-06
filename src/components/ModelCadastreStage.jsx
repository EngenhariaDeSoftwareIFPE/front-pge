import React, { useState } from 'react';
import InputCadastreSignatorie from './ui/InputCadastreSignatorie';
import SelectCadastreStudentSiec from './ui/SelectCadastreStudentSiec';
import ButtonWhite from './ui/ButtonWhite';
import ButtonGreen from './ui/ButtonGreen';
import Modal from './Modal';

const ModelCadastreStage = ({ isVisible, onClose }) => {
    if ( !isVisible ) return null;

    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
 
    const stages = [
        'Estágio I',
        'Estágio II',
        'Estágio III',
        'Estágio IV',
        'Estágio comum',
    ]

    const students = [
        "Ana Silva",
        "Mariana Oliveira",
        "Rafaela Mendes",
        "Pedro Castro",
        "Lucas Almeida",
        "Carla Rodrigues",
        "Gustavo Santos",
        "Juliana Lima",
        "Fernanda Oliveira",
        "Isaac Souza",
        "Beatriz Almeida",
        "Mateus Pereira",
        "Camila Santos",
        "Luana Mendes"
      ];
      

    const course = [
        'Técnico de Agropecuária',
        'Técnico de Agroindústria',
        'Licenciatura em Música',
    ]

    const professors = [
        "Mariana Santos",
        "Carlos Lima",
        "Ana Pereira",
        "Luis Oliveira",
        "João Silva",
        "Maria Oliveira",
        "Daniel Leite"
      ];
      
    const [showModal, setShowModal] = useState(false);

    return (
    <div id='wrapper' onClick={handleClose} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[965px] h-[430px] bg-primary-green border-4 border-[#185228] rounded-[40px] pl-[54px] pb-[47px]'>
            <div className='w-full relative'>
                <button onClick={() => onClose()} className="absolute right-[21px] top-[21px]">
                    <img src="ic-close.svg" alt="Botão para fechar edição de dados" className='w-8'/>
                </button>
            </div>
            <div className='text-white mt-[47px]'>
                <h1 className='font-semibold text-[26px]'>Adicionar um estágio</h1>
                <h2 className='font-medium text-[18px] mb-[25px]'>Insira os dados</h2>
            </div>
            <div className='flex mb-[38px]'>
                <SelectCadastreStudentSiec 
                    options={students}
                    label={'Aluno'}
                    placeHolder={'Selecione o aluno'}
                    width={'w-[380px]'}
                />
                <SelectCadastreStudentSiec 
                    options={professors}
                    label={'Professor orientador'}
                    placeHolder={'Selecione o professor orientador'}
                    width={'w-[380px]'}
                    ml={'ml-[39px]'}
                />
            </div>
            <div className='flex '>     
                <SelectCadastreStudentSiec 
                    options={course}
                    label={'Curso'}
                    placeHolder={'Selecione o curso'}
                    width={'w-[319px]'}
                />
                <SelectCadastreStudentSiec 
                    options={stages}
                    label={'Tipo de estágio'}
                    placeHolder={'Selecione o tipo de estágio'}
                    width={'w-[319px]'}
                    ml={'ml-[39px]'}
                />
            </div>
            <div className="flex justify-center mt-[46px]">
                <ButtonWhite
                    text={'Cancelar'}
                    width={'w-[140px]'}
                    height={'h-[44px]'}
                    mr={'mr-[62px]'}
                    onClick={() => onClose()}
                />
                <ButtonGreen
                    text={'Iniciar estágio'}
                    width={'w-[180px]'}
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
                <p className='text-white font-medium text-[25px] my-[35px]'>Estágio iniciado com sucesso!</p>
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

export default ModelCadastreStage