"use client";

import React, { useState } from 'react';
import FormUserDataSiec from "@/components/FormUserDataSiec";
import FormDataChangeSiec from "@/components/FormDataChangeSiec";
import NavBarVertical from "@/components/navBarSiec/NavBarVertical";
import FormChangePassword from './FormChangePassword';

const HandleUserDataSiec = () => {
    const [isFormUserData, setIsFormUserData] = useState(true);
    const [isChangePassword, setIsChangePassword] = useState(false);

    const handleButtonClick = () => {
      setIsFormUserData(!isFormUserData);
    };

    const HandleOpenDataChange = () => {
        setIsFormUserData(false);
        setIsChangePassword(false);
    };

    const HandleOpenPasswordChange = () => {
        setIsFormUserData(false);
        setIsChangePassword(true);
    };

    return (
        <div className="flex">
            {isFormUserData ? (
                <>
                    <NavBarVertical />
                    <div className="mt-14 w-full" id='conteudo'>
                        <FormUserDataSiec onOpenDataChange={HandleOpenDataChange} onOpenPasswordChange={HandleOpenPasswordChange}/>
                    </div>
                </>
            ) : (
                isChangePassword ? (
                    <FormChangePassword onButtonClick={handleButtonClick}/>
                ) : (
                    <FormDataChangeSiec onButtonClick={handleButtonClick}/>
                )
            )}
        </div>
    )
}

export default HandleUserDataSiec