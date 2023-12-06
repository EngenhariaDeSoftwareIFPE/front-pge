"use client";

import { useState } from "react";

export default function InputCadastreStudent(props) {
    const data = {
        label: props.label,
        id: props.id,
        field: props.id, 
        placeHolder: props.placeHolder,
        width: props.width,
        mr: props.mr,
        student: props.student,
        setStudent: props.setStudent,
        errors: props.errors,
        type: props.type
    }
    
    const [ showPassword, setShowPassword ] = useState(false);

    const handleChange = (field, value) => {
        data.setStudent(prevStudent => ({
            ...prevStudent,
            [field]: value,
        }))
    }

    return (
        <div className="flex flex-col relative">
            <label className="text-[18px] text-white font-medium">{data.label}</label>
            <input
                className={`${data.width} ${data.mr} h-[40px] rounded-[12px] px-[20px] hover:border-b-2 border-secundary-green transition duration-300 ease-in-out`}
                type={data.type === 'password' && !showPassword ? data.type : 'text'}
                id={data.id}
                placeholder={data.placeHolder}
                value={data.student[data.field]}
                onChange={(e) => handleChange(data.field, e.target.value)}
            />
            <div className="relative">
                <img
                    src="../shield_exclamation.svg"
                    alt="Escudo exclamação"
                    className={`${data.errors ? 'flex' : 'hidden'} absolute top-[2px]`}
                />
                <p className="text-red-error text-[12px] absolute left-[12px] top-0">
                    {data.errors}
                </p>
            </div>
            {data.type === 'password' && data.field === 'password' && (
                <button
                    type="button"
                    className="absolute right-[40px] top-[70%] transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? 
                        <img
                            src="../eye_password_nshow.svg"
                            alt="Ocultar senha"
                        /> 
                            : 
                        <img
                            src="../eye_password_show.svg"
                            alt="Ver senha"
                        />
                    }
                </button>
            )} 
        </div> 
    )
}