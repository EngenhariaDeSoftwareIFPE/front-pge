"use client";

import React, { useState } from 'react';
import FormUserData from "@/components/FormUserData";
import FormDataChange from "@/components/FormDataChange";
import NavBarVertical from "@/components/navBar/NavBarVertical";
import FormChangePassword from './FormChangePassword';

const HandleUserData = () => {
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
                    <div className="mt-14 w-full">
                        <FormUserData onOpenDataChange={HandleOpenDataChange} onOpenPasswordChange={HandleOpenPasswordChange}/>
                    </div>
                </>
            ) : (
                isChangePassword ? (
                    <FormChangePassword onButtonClick={handleButtonClick}/>
                ) : (
                    <FormDataChange onButtonClick={handleButtonClick}/>
                )
            )}
        </div>
    )
}

export default HandleUserData