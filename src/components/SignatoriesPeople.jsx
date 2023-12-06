import * as d from '../data/people'

import InputSearchPeople from './ui/InputSearchPeople';
import ButtonAddSignatorie from './ui/ButtonAddSignatorie';
import CardPeople from './ui/CardPeople';

import { useState } from 'react';

export default function SignatoriesPeople() {
    const [handleSignatories, setHandleSignatories] = useState('');

    const renderSignatories = (signatories) => {
        const filteredSignatories = signatories
            .filter((signatorie) => signatorie.name.toLowerCase().includes(handleSignatories.toLowerCase()))
            .sort((a, b) => a.name.localeCompare(b.name));
    
        return filteredSignatories.map((signatorie) => (
            <CardPeople
                key={signatorie.registrationNumber}
                name={signatorie.name}
                sector={signatorie.sector}
                course={signatorie.course}
                registrationNumber={signatorie.registrationNumber}
            />
        ));
    }
    return (
        <div className='w-[1200px] mx-auto'>
            <div className='grid grid-cols-3'>
                <div className='col-span-1'>
                    <InputSearchPeople
                        id={d.signatorieInputSearch.id}
                        handleSignatories={handleSignatories}
                        setHandleSignatories={setHandleSignatories}
                        placeHolder={d.signatorieInputSearch.placeHolder}
                    />
                </div>
                <div className='col-span-1'></div>
                <div className='col-span-1 flex justify-end'>
                    <ButtonAddSignatorie/>
                </div>
            </div>
    
            <div className='flex flex-wrap justify-between'>
                {renderSignatories(d.dataSignatorie)}
            </div>
        </div>
    );
    
}