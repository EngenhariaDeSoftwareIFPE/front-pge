"use client";

import React, { useState } from 'react'
import Modal from '../Modal'
import ButtonGreen from './ButtonGreen'

const widths = {
    buttonGreen: 'w-[240px]',
    buttonWhite: 'w-[180px]'
}

const heights = {
    buttonGreen: 'h-[44px]',
}

const DocumentDownload = ({ title, filePath }) => {
    const [showModal, setShowModal] = useState(false);
  return (
    <div>
        <a href={filePath} download={title} onClick={() => setShowModal(true)}>
            <div className="w-[460px] h-[68px] bg-green-500 rounded-xl flex flex-col justify-between items-start p-2">
                <div className="text-white text-lg font-semibold">
                    {title}
                </div>
                <div className='flex items-center'>
                    <img
                    src="ic-download.svg"
                    alt="Ícone fazer download"
                    className="cursor-pointer"
                    />
                    <p className='text-white text-xs font-semibold ms-2'>Download</p>
                </div>
            </div>
        </a>
        <Modal bgColor={"bg-[#3AC25E]"} isVisible={showModal} onClose={() => setShowModal(false)}>
          <img className='w-[100px]' src="ic-shield-check.svg" alt="Ícone escudo de verificação" />
          <p className='text-white text-2xl font-medium'>Download realizado!</p>
          <ButtonGreen
              text="OK"
              width={widths.buttonGreen}
              height={heights.buttonGreen}
              onClick={() => setShowModal(false)}
          />
      </Modal>
    </div>
  )
}

export default DocumentDownload