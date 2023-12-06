"use client";

import ButtonGreen from "./ui/ButtonGreen";
import ButtonWhite from "./ui/ButtonWhite";
import InputForgotPassword from "./ui/InputForgotPassword";

import * as d from "../data/formForgotPasswordStep1"

import { useRouter } from "next/navigation";

export default function FormForgotPasswordStep1() {
    const email = {
        mt: 'mt-[54px]',
        mb: 'mb-[54px]',
    }

    const buttonWhite = {
        width: 'w-[140px]',
        height: 'h-[45px]',
        mr: 'mr-[27px]',
    }

    const buttonGreen = {
        width: 'w-[140px]',
        height: 'h-[45px]',
    }

    const router = useRouter();

    return (
        <form 
            className="flex items-center justify-center flex-col w-full h-full"
            onSubmit={(e) => e.preventDefault()}
        >
            <div className="w-[340px] text-center">
                <h1 className="text-white text-[30px] font-semibold">{d.data.title}</h1>
                <h2 className="text-white text-[16px] font-normal">{d.data.subtitle}</h2>
            </div>
            <InputForgotPassword
                id={d.email.id}
                placeHolder={d.email.placeHolder}
                marginTop={email.mt}
                marginBottom={email.mb}
            />
            <div className="flex flex-row">
                <ButtonWhite
                    text={d.buttonWhite.text}
                    width={buttonWhite.width}
                    height={buttonWhite.height}
                    mr={buttonWhite.mr}
                    onClick={() => router.push(d.paths.login)}
                />
                <ButtonGreen
                    text={d.buttonGreen.text}
                    width={buttonGreen.width}
                    height={buttonGreen.height}
                    onClick={() => router.push(d.paths.send)}
                />
            </div>
        </form>
    )
}