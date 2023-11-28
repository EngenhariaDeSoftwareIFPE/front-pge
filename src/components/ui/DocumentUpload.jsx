'use client';

import React, { useState } from 'react';
import ButtonWhite from './ButtonWhite';
import ButtonRed from './ButtonRed';
import Modal from '../Modal';
import ButtonGreen from './ButtonGreen';

const widths = {
  buttonGreen: 'w-[240px]',
  buttonWhite: 'w-[180px]'
}

const heights = {
  buttonGreen: 'h-[44px]',
}

const DocumentUpload = ({ title }) => {
  const [fileName, setFileName] = useState("Escolher documento");
  const [file, setFile] = useState(null);
  const [modalFileDelete, setmodalFileDelete] = useState();
  const [modalFileDeleted, setmodalFileDeleted] = useState();
  const [modalWrongFile, setModalWrongFile] = useState();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      if (
        selectedFile.type === 'application/pdf' ||
        selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
        setFileName(selectedFile.name);
        setFile(selectedFile);
      } else {
        setModalWrongFile(true)
      }
    }
  };

  const handleRemoveFile = () => {
    setFileName("Escolher documento");
    setFile(null);
    setmodalFileDelete(false);
    setmodalFileDeleted(true);
  };

  return (
    <div>
      <div className="text-black text-lg font-semibold">{title}</div>
      {file ? (
        <div className="w-[460px] h-[68px] bg-green-500 rounded-xl flex justify-between p-3 items-center">
          <div className="w-[216px] h-6 text-black text-lg font-normal">
            {fileName}
          </div>
            <img
              src="ic-trash.svg"
              alt="Ícone remover arquivo"
              onClick={() => setmodalFileDelete(true)}
              className="cursor-pointer"
            />
        </div>
      ) : (
        <label className='cursor-pointer'>
          <div className="w-[460px] h-[68px] bg-green-500 rounded-xl flex justify-between p-3 items-center">
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="w-[216px] h-6 text-black text-lg font-normal">
              {fileName}
            </div>
            <img
              src="ic-upload.svg"
              alt="Ícone upload de arquivo"
            />
          </div>
        </label>
      )}
      <Modal bgColor="bg-[#3AC25E]" isVisible={modalFileDelete} onClose={() => setmodalFileDelete(false)}>
          <img className='w-[85px]' src="ic-sign-out.svg" alt="Ícone logout" />
          <p className='text-white text-2xl font-medium'>Deseja excluir este documento?</p>
          <div className='flex w-full justify-around'>
              <ButtonWhite
              text="Cancelar"
              width={widths.buttonWhite}
              height={heights.buttonGreen}
              onClick={() => setmodalFileDelete(false)}
              />
              <ButtonRed
              text="Excluir"
              width={widths.buttonWhite}
              height={heights.buttonGreen}
              onClick={() => handleRemoveFile()}
              />
          </div>
      </Modal>
      <Modal bgColor={"bg-[#3AC25E]"} isVisible={modalFileDeleted} onClose={() => setmodalFileDeleted(false)}>
          <img className='w-[100px]' src="ic-shield-check.svg" alt="Ícone escudo de verificação" />
          <p className='text-white text-2xl font-medium'>Documento excluído com sucesso!</p>
          <ButtonGreen
              text="OK"
              width={widths.buttonGreen}
              height={heights.buttonGreen}
              onClick={() => setmodalFileDeleted(false)}
          />
      </Modal>
      <Modal bgColor={"bg-[#C61849]"} isVisible={modalWrongFile} onClose={() => setModalWrongFile(false)}>
          <img className='w-[100px]' src="ic-shield-check.svg" alt="Ícone escudo de verificação" />
          <p className='text-white text-2xl font-medium'>Documento em formato inválido!</p>
          <ButtonWhite
              text="Tentar novamente"
              width={widths.buttonGreen}
              height={heights.buttonGreen}
              onClick={() => setModalWrongFile(false)}
          />
      </Modal>
    </div>
  );
};

export default DocumentUpload;
