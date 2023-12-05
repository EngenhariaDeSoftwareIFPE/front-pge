import React from 'react';

const ModalStage = ({ isVisible, onClose, children, bgColor, border }) => {
    if ( !isVisible ) return null;

    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
    //exemplo de parametro de borda: border-4 border-[#185228]
    return (
    <div id='wrapper' onClick={handleClose} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center '>
        <div className={`w-[965px] h-[468px] ${bgColor} rounded-[40px] flex flex-col ${border}`}>    
            <div className='h-full w-full '>
                {children}
            </div>
        </div>
    </div>
    )
}

export default ModalStage