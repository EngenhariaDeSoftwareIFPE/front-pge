"use client";

import { useEffect, useState } from "react";

export default function InputLogin(props) {
    const data = {
        id: props.id,
        field: props.id,
        type: props.type,
        placeHolder: props.placeHolder,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        user: props.user,
        setUser: props.setUser,
        errors: props.errors,
    };

    const [ showPassword, setShowPassword ] = useState(false);

    const handleChange = (field, value) => {
        data.setUser(prevUser => ({
            ...prevUser,
            [field]: value,
        }))
    };

    return (
        <div className="flex flex-col relative">
            <input 
                className={`w-[345px] h-[40px] rounded-[12px] p-[22px] font-semibold hover:border-b-2 border-secundary-green transition duration-300 ease-in-out ${data.marginTop} ${data.marginBottom}`}
                type={data.type === 'password' && !showPassword ? data.type : 'text'}
                id={data.id}
                placeholder={data.placeHolder}
                value={data.user[data.field]}
                onChange={(e) => handleChange(data.field, e.target.value)}
            />
            <div className="absolute flex left-2 top-[50%] transform translate-y-[130%]">
                <img
                    src="../shield_exclamation.svg"
                    alt="Escudo exclamação"
                    className={`${data.errors ? 'flex' : 'hidden'}`}
                />
                <p className="text-red-error text-[12px] ml-[5px]">
                    {data.errors}
                </p>
            </div>
            {data.type === 'password' && (
                <button
                    type="button"
                    className="absolute right-2 top-[50%] transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? 
                        <img
                            src="eye_password_nshow.svg"
                            alt="Ocultar senha"
                        /> 
                            : 
                        <img
                            src="eye_password_show.svg"
                            alt="Ver senha"
                        />
                    }
                </button>
            )} 
        </div>
    );
}