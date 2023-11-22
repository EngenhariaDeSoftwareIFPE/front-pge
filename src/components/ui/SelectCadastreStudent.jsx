"use client";

import { useState } from "react"

export default function SelectCadastreStudent(props) {
    const data = {
        label: props.label,
        id: props.id,
        placeHolder: props.placeHolder,
        width: props.width,
        mr: props.mr,
        options: props.options,
        student: props.student,
        setStudent: props.setStudent,
    }

    const [selectedValue, setSelectedValue] = useState(data.placeHolder);
    const [isArrowUp, setIsArrowUp] = useState(false);

    const handleChange = (event) => {
        const selectedOption = event.target.value;

        setSelectedValue(selectedOption);
        data.setStudent(prevStudent => ({
            ...prevStudent,
            ['course']: selectedOption
        }))
    };

    const toggleArrowDirection = () => {
        setIsArrowUp(!isArrowUp);
    };

    const mapOptions = (options) => {
        return options.map((option) => {
            return (
                <option key={option} value={option}>{option}</option>
            );
        });
    };

    return (
        <div className="relative inline-block">
            <label className="text-[18px] text-white font-medium">
                {data.label}
            </label>
            <div className="relative">
                <select 
                    className={`${data.width} ${data.mr} h-[40px] rounded-[12px] appearance-none px-[20px] hover:border-b-2 border-secundary-green transition duration-300 ease-in-out ${selectedValue == data.placeHolder ? 'dark:text-primary-gray' : 'dark:text-black'}`}
                    id={data.id}
                    value={selectedValue} 
                    onChange={handleChange}
                    onClick={toggleArrowDirection}
                >
                    <option disabled value={data.placeHolder}>{data.placeHolder}</option>
                    {mapOptions(data.options)}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-[20px] pointer-events-none">
                    <img 
                        src={isArrowUp ? "../mini-arrow-up.svg" : "../mini-arrow-down.svg"}
                        alt={isArrowUp ? "Seta para cima" : "Seta para baixo"}
                        className="w-[35px] h-[35px]"
                    />
                </div>
            </div>
        </div>
    )
}
