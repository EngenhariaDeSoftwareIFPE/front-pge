'use client';

import React, { useState } from 'react'
import ButtonGreen from '@/components/ui/ButtonGreen'
import DocumentUpload from '@/components/ui/DocumentUpload'
import Modal from './Modal';
import ButtonWhite from './ui/ButtonWhite';

const widths = {
    buttonGreen: 'w-[240px]',
    buttonWhite: 'w-[180px]'
}

const heights = {
    buttonGreen: 'h-[44px]',
}

const DocumentsToSent = () => {
    const [modalFileSent, setmodalFileSent] = useState();
    const [errorSent, setErrorSent] = useState();
    
  return (
    <div className="flex flex-col mx-auto items-center">
        <p className='w-[567px] h-[50px] text-center text-black text-lg font-medium mt-4'>Selecione os documentos em formato .pdf ou .docx que deseja enviar para serem assinados e os envie.</p>
            <div className='flex flex-col-reverse items-center'>
                <ButtonGreen
                    text="Aplicar alterações"
                    width={widths.buttonGreen}
                    height={heights.buttonGreen}
                    onClick={() => setErrorSent(true)}
                />
                <div className='flex space-x-14 mt-4 mb-8'>
                    <DocumentUpload title="Folha de Frequência de Estágio"/>
                    <DocumentUpload title="Requerimento de Defesa de Estágio"/>
                </div>
                <div className='flex space-x-14 mt-14'>
                    <DocumentUpload title="Folha de Avaliação de Estágio"/>
                    <DocumentUpload title="Termo de aceite de aluno(a) para estágio"/>
                </div>
            </div>
            <Modal bgColor={"bg-[#3AC25E]"} isVisible={modalFileSent} onClose={() => setmodalFileSent(false)}>
                <img className='w-[100px]' src="ic-shield-check.svg" alt="Ícone escudo de verificação" />
                <p className='text-white text-2xl font-medium'>Envio realizado com sucesso!</p>
                <ButtonGreen
                    text="OK"
                    width={widths.buttonGreen}
                    height={heights.buttonGreen}
                    onClick={() => setmodalFileSent(false)}
                />
            </Modal>

            <div className="text-center text-black text-sm font-medium mt-20">
                <p>Como assinar meus documentos com Assinatura Digital Gov?</p>
                <a href="https://www.youtube.com/?bp=wgUCEAE%3D" target='_blank'>Veja vídeo</a>
            </div>
            <Modal bgColor={"bg-[#C61849]"} isVisible={errorSent} onClose={() => setErrorSent(false)}>
                <img className='w-[100px]' src="ic-sad.svg" alt="Ícone escudo de verificação" />
                <p className='text-white text-2xl font-medium w-[90%] text-center'>Desculpa, não foi possível enviar. Tente novamente mais tarde.</p>
                <ButtonWhite
                    text="OK"
                    width={widths.buttonWhite}
                    height={heights.buttonGreen}
                    onClick={() => setErrorSent(false)}
                />
            </Modal>
    </div>
  )
}

export default DocumentsToSent