"use client";

import ButtonSendAuth from "./ui/ButtonGreen"
import InputLogin from "./ui/InputLogin"

import * as d from "../data/formLogin"
import * as v from "../validations/formLogin"

import { useState } from "react"
import { useRouter } from "next/navigation";

//Medidas componentes
const email = {
    mt: 'mt-[26px]',
    mb: 'mb-[21px]',
}

const password = {
    mt: 'mt-0',
    mb: 'mb-0',
}

const button = {
    width: 'w-[140px]',
    height: 'h-[45px]',
}


const validateForm = (data) => {
    const result = v.schema.safeParse(data);

    if (result.success) {
        console.log('Válidado:', result.data)
    }
}

export default function FormLogin() {
    const router = useRouter();

    const [ user, setUser ] = useState(d.model)
    const [ errors, setErrors ] = useState({});
    
    // Função de validação formulário
    const validateForm = (data) => {
        // Limpa os erros
        setErrors({});

        const result = v.schema.safeParse(data);

        if (result.success) {
            return router.push(d.paths.home);
        } else {
            for (const fieldError of result.error.errors) {
                const field = fieldError.path[0];

                const errorMessage = fieldError.message
                
                setErrors((currentErrors) => ({
                    ...currentErrors,
                    [field]: errorMessage,
                }));
            }
            return errors;
        }
    };

    return (
        <form 
            className="flex items-center justify-center flex-col w-full h-full"
            onSubmit={(e) => e.preventDefault()}
        >
            <label className="text-white text-[30px]">{d.data.login}</label>
            <InputLogin
                errors={errors[d.email.id]}
                id={d.email.id}
                placeHolder={d.email.placeHolder}
                marginTop={email.mt}
                marginBottom={email.mb}
                user={user}
                setUser={setUser}
            />
            <InputLogin
                errors={errors[d.password.id]}
                id={d.password.id}
                type={d.password.type}
                placeHolder={d.password.placeHolder}
                marginTop={password.mt}
                marginBottom={password.mb}
                user={user}
                setUser={setUser}
                showPasswordToggle
            />
            <a href={d.paths.passwordReset} className="w-[345px] text-end text-white font-monteserrat font-bold mb-[41px] hover:underline">{d.data.forgotPassword}</a>
            <ButtonSendAuth
                text={d.button.text}
                width={button.width}
                height={button.height}
                onClick={() => validateForm(user)}
            />
            <p className="text-white font-monteserrat font-medium">
                {d.data.haveNotAccount} 
                <a href={d.paths.cadastre} className="text-white font-monteserrat font-bold ml-1 hover:underline">{d.data.createAccount}</a>
            </p>
        </form>  
    )
}