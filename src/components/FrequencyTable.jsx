"use client"

import React, { useState } from 'react';
import Modal from './Modal';
import ButtonGreen from './ui/ButtonGreen';
import ButtonRed from './ui/ButtonRed';
import ButtonWhite from './ui/ButtonWhite';
import InputCalendar from './ui/InputCalendar';
import InputFrequencyHours from './ui/InputFrequencyHours';

const button = {
    width: 'w-[250px]',
    height: 'h-[45px]',
}

const hoursAmount = {
    id: 'hours',
    placeHolder: 'Quantidade de horas'
}

const widths = {
    buttonGreen: 'w-[150px]',
}
  
const height = {
    buttonGreen: 'h-[40px]',
}

const FrequencyTable = () => {
  const [showMore, setShowMore] = useState(false);
  const [editPopup, setEditPopup] = useState({ isOpen: false, rowIndex: null });
  const [frequencyModal, setFrequencyModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [successEditModal, setSuccessEditModal] = useState(false);
  const [failedModal, setFailedModal] = useState(false);
  const [deletFrequencyModal, setDeletFrequencyModal] = useState(false);

  const totalRows = 150; //passar aqui o valor de linhas totais 
  const rowsToShow = showMore ? totalRows : 7;

  const tableData = [
    { date: '01/01/2023', hours: '3h' },
    { date: '01/01/2023', hours: '3h' },
    { date: '01/01/2023', hours: '3h' },
    { date: '01/01/2023', hours: '3h' },
    { date: '01/01/2023', hours: '3h' },
    { date: '01/01/2023', hours: '3h' },
    { date: '01/01/2023', hours: '3h' },
    { date: '01/01/2023', hours: '3h' },
    { date: '01/01/2023', hours: '3h' },
    { date: '01/01/2023', hours: '3h' },
   ];

  const openEditPopup = (rowIndex) => {
    setEditPopup({ isOpen: true, rowIndex });
  };

  const closeEditPopup = () => {
    setEditPopup({ isOpen: false, rowIndex: null });
  };

  const handleSuccessModal = () => {
    setFrequencyModal(false);
    setSuccessModal(true);
  }

  const handleEditModal = () => {
    closeEditPopup();
    setSuccessEditModal(true);
  }

  const handleDeletModal = () => {
    closeEditPopup();
    setDeletFrequencyModal(true);
  }

  return (
    <div className="flex flex-col mt-10 m-auto w-1/2">
        <h2 className="mx-auto text-center text-black text-[22px] font-semibold">Histórico da frequência</h2>
        <div className='inline-block border shadow-2xl mt-8'>
            <table className="bg-white w-full border-4 border-green-500">
            <thead>
                <tr>
                <th className="border-2 border-green-500 px-4 py-2">Data</th>
                <th className="border-2 border-green-500 px-4 py-2">Carga Horaria</th>
                </tr>
            </thead>
            <tbody>
                {tableData.slice(0, rowsToShow).map((rowData, index) => (
                <tr key={index}>
                    <td className="border-2 border-green-500 px-4 py-2 text-center">{rowData.date}</td>
                    <td className="border-2 border-green-500 px-4 py-2 text-center relative">
                    {rowData.hours}
                    <button
                        className="absolute right-0 mr-2 p-1 text-blue-500 cursor-pointer"
                        onClick={() => openEditPopup(index)}
                    >
                        <img src="ic-pencil.svg" alt="ícone lápis" />
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>

        {totalRows > 7 && (
            <a
            className="mt-2 p-2 text-green rounded flex items-center"
            onClick={() => setShowMore(!showMore)}
            >
            {showMore ? 'Ver Menos' : 'Ver Mais'}
            {showMore ? (
                            <img src="mini-arrow-up.svg" alt="ícone seta para baixo" />
                        ) : (
                            <img src="mini-arrow-down.svg" alt="ícone seta para cima" />
                        )}
            
            </a>
        )}

        <div className='mx-auto'>
            <ButtonGreen
                text="Adicionar frequência"
                width={button.width}
                height={button.height}
                onClick={() => setFrequencyModal(true)}
            />
        </div>

        {editPopup.isOpen && (
            <Modal bgColor="bg-[#3AC25E]" isVisible={editPopup.isOpen} onClose={() => closeEditPopup()} border="border-4 border-[#185228]">
                {/*Usar editPopup.rowIndex para identificar a linha que esta sendo editada*/}
                <div className='w-full h-full'>
                    <button onClick={() => closeEditPopup()}>
                        <img src="ic-close.svg" alt="Botão para fechar edição de dados" className='w-8'/>
                    </button>
                    <div className='flex flex-col items-center mt-[-30px]'>
                        <h1 className="text-white text-[18px] font-semibold">Editar frequência</h1>
                        <h2 className="text-white text-[16px] font-medium">Edite a data e a carga horária corretamente</h2>
                    </div>
                    <div className='flex space-x-2 mt-10'>
                        <InputCalendar/>
                        <InputFrequencyHours
                            id={hoursAmount.id}
                            placeHolder={hoursAmount.placeHolder}
                        />
                    </div>
                    <div className='flex justify-center mt-10 space-x-2'>
                        <ButtonRed
                            text="Excluir"
                            width={widths.buttonGreen}
                            height={height.buttonGreen}
                            onClick={() => handleDeletModal()}
                        />
                        <ButtonGreen
                            text="Editar"
                            width={widths.buttonGreen}
                            height={height.buttonGreen}
                            onClick={() => handleEditModal()}
                        />
                    </div>
                </div>
            </Modal>
        )}

        <Modal bgColor="bg-[#3AC25E]" isVisible={frequencyModal} onClose={() => setFrequencyModal(false)} border="border-4 border-[#185228]">
            <div className='w-full h-full'>
                <button onClick={() => setFrequencyModal(false)}>
                    <img src="ic-close.svg" alt="Botão para fechar edição de dados" className='w-8'/>
                </button>
                <div className='flex flex-col items-center mt-[-30px]'>
                    <h1 className="text-white text-[18px] font-semibold">Adicionar frequência</h1>
                    <h2 className="text-white text-[16px] font-medium text-center w-[80%]">Adicione a data e carga horária correspondente a qualquer dia de seu estágio.</h2>
                </div>
                <div className='flex space-x-2 mt-10'>
                    <InputCalendar/>
                    <InputFrequencyHours
                        id={hoursAmount.id}
                        placeHolder={hoursAmount.placeHolder}
                    />
                </div>
                <div className='flex justify-center mt-10 space-x-2'>
                    <ButtonGreen
                        text="Registrar frequência"
                        width={button.width}
                        height={height.buttonGreen}
                        onClick={() => handleSuccessModal()}
                    />
                </div>
            </div>
        </Modal>

        <Modal bgColor={"bg-[#3AC25E]"} isVisible={successModal} onClose={() => setSuccessModal(false)}>
            <img className='w-[100px]' src="ic-success.png" alt="Ícone escudo de verificação" />
            <p className='text-white text-2xl font-medium'>Frequência adicionada com sucesso!</p>
            <ButtonGreen
                text="OK"
                width={widths.buttonGreen}
                height={height.buttonGreen}
                onClick={() => setSuccessModal(false)}
            />
        </Modal>

        <Modal bgColor={"bg-[#3AC25E]"} isVisible={successEditModal} onClose={() => setSuccessEditModal(false)}>
            <img className='w-[100px]' src="ic-shield-check.svg" alt="Ícone escudo de verificação" />
            <p className='text-white text-2xl font-medium'>Frequência editada com sucesso!</p>
            <ButtonGreen
                text="OK"
                width={widths.buttonGreen}
                height={height.buttonGreen}
                onClick={() => setSuccessEditModal(false)}
            />
        </Modal>

        <Modal bgColor={"bg-[#C61849]"} isVisible={failedModal} onClose={() => setFailedModal(false)}>
            <img className='w-[100px]' src="ic-sad.svg" alt="Ícone escudo de verificação" />
            <p className='text-white text-2xl font-medium w-[90%] text-center'>Desculpa, não foi possível adicionar a freqência. Tente novamente mais tarde.</p>
            <ButtonWhite
                text="OK"
                width={widths.buttonWhite}
                height={height.buttonGreen}
                onClick={() => setFailedModal(false)}
            />
        </Modal>

        <Modal bgColor="bg-[#3AC25E]" isVisible={deletFrequencyModal} onClose={() => setDeletFrequencyModal(false)}>
          <img className='w-[85px]' src="ic-sign-out.svg" alt="Ícone logout" />
          <p className='text-white text-2xl font-medium'>Deseja excluir essa frequência?</p>
          <div className='flex w-full justify-around'>
              <ButtonWhite
              text="Cancelar"
              width={widths.buttonGreen}
              height={height.buttonGreen}
              onClick={() => setDeletFrequencyModal(false)}
              />
              <ButtonRed
              text="Excluir"
              width={widths.buttonGreen}
              height={height.buttonGreen}
              onClick={() => setDeletFrequencyModal(false)}
              />
          </div>
      </Modal>
    </div>
  );
};

export default FrequencyTable;
