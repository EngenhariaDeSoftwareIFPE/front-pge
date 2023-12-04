'use client';

import * as d from '../data/people';

import { useState } from 'react'

import StudentPeople from './StudentPeople';
import SignatoriesPeople from './SignatoriesPeople';

export default function HandlePeople() {
    const [toSentComponent, setToSentComponent] = useState(true);
    const [borderToSent, setBorderToSent] = useState("border-2 border-green-900");
    const [borderRecived, setBorderRecived] = useState(true);

    const handlePeoplePages = (value) => {
        setToSentComponent(value)

        if(value) {
            setBorderToSent("border-2 border-green-900")

            setBorderRecived("")
        } else {
            setBorderToSent("border-r-2 border-green-900")

            setBorderRecived("border-2 border-green-900")
        }
    }
    
    return (
        <div className="flex flex-col w-screen max-h-[617px] overflow-y-auto" id='conteudo'>
            <div className="w-[280px] h-[45px] relative mx-auto mt-5">
                <button onClick={() => handlePeoplePages(false)} className=" w-[140.44px] h-[45px] left-[139.56px] top-[-0px] absolute">
                    <div className={`w-[140.44px] h-[45px] left-[140.44px] top-[45px] absolute origin-top-left -rotate-180 bg-green-500 rounded-tl-xl rounded-bl-xl ${borderRecived}`} />
                    <div className="w-[119.11px] h-[22.50px] left-[10.67px] top-[11.25px] absolute text-center text-white text-xl font-semibold">{d.data.buttonSignatories}</div>
                </button>
                <button onClick={() => handlePeoplePages(true)} className="w-[140.44px] h-[45px] left-0 top-0 absolute">
                    <div className={`w-[140.44px] h-[45px] left-0 top-0 absolute bg-green-500 rounded-tl-xl rounded-bl-xl ${borderToSent}`} />
                    <div className="w-[94.22px] h-[22.50px] left-[23.11px] top-[11.25px] absolute text-center text-white text-xl font-semibold">{d.data.buttonStudent}</div>
                </button>
            </div>
            <div className='flex flex-col items-start ml-[102px] mt-[51px]'>
                {toSentComponent ? (
                    <StudentPeople/>
                ):(
                    <SignatoriesPeople/>
                )}
            </div>      
        </div>
    )
}   