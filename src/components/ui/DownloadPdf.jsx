"use client";

import React, { useState } from 'react'
import Modal from '../Modal'
import ButtonGreen from './ButtonGreen';

const widths = {
    buttonGreen: 'w-[240px]',
}

const heights = {
    buttonGreen: 'h-[44px]',
}

const DownloadPdf = ({ title, filePath, imagePath }) => {
    const [showModal, setShowModal] = useState(false);
  return (
    <div>
        <a href={filePath} download={title} className="w-[297px] h-52 font-monteserrat" onClick={() => setShowModal(true)}>
            <div className="w-[297px] h-52 bg-green-900 rounded-xl p-3">
                <img className="w-[273px] h-[129px] rounded-xl mx-auto" src={imagePath} />
                <div className="w-[258.53px] h-[26.90px] mt-2 text-center text-white text-base font-medium">{title}</div>
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

export default DownloadPdf