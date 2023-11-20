"use client";

import React, { useState } from 'react';
import FormUserData from "@/components/FormUserData";
import FormDataChange from "@/components/FormDataChange";
import NavBarVertical from "@/components/navBar/NavBarVertical";

const HandleUserData = () => {
    const [isFormUserData, setIsFormUserData] = useState(true);

    const handleButtonClick = () => {
      setIsFormUserData(!isFormUserData);
    };

    return (
        <div className="flex">
            {isFormUserData ? (
                <>
                    <NavBarVertical />
                    <div className="mt-14 w-full">
                        <FormUserData onButtonClick={handleButtonClick} />
                    </div>
                </>
            ) : (
                <FormDataChange onButtonClick={handleButtonClick}/>
            )}
        </div>
    )
}

export default HandleUserData