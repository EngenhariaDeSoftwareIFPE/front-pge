import React from 'react';

const ModalDeleteAccount = ({ isVisible, onClose, children, bgColor, border }) => {
    if ( !isVisible ) return null;

    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }

    return (
    <div id='wrapper' onClick={handleClose} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='md:w-[500px] md:h-[450px] h-[60%] w-[90%] mx-auto'>
            <div className={`h-full w-full ${bgColor} p-2 rounded-xl flex flex-col ${border}`}>    
                <div className='h-full w-full flex flex-col items-center justify-around p-5'>
                    {children}
                </div>
            </div>
        </div>
    </div>
    )
}

export default ModalDeleteAccount