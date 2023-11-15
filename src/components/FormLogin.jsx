import ButtonSendAuth from "./ui/ButtonSendAuth"
import InputLogin from "./ui/InputLogin"
import * as d from "../data/formLogin"

export default function FormLogin() {
    return (
        <form className="flex items-center justify-center flex-col w-full h-full">
            <label className="text-white text-[30px] font-monteserrat">{d.data.login}</label>
            <InputLogin
                id={'email'}
                placeHolder={d.data.placeHolders[0]}
                marginTop={'mt-[26px]'}
                marginBottom={'mb-[21px]'}
            />
            <InputLogin
                id={'password'}
                placeHolder={d.data.placeHolders[1]}
                marginTop={'mt-0'}
                marginBottom={'mb-0'}
            />
            <a href="#" className="w-[345px] text-end text-white font-monteserrat font-bold mb-[41px] hover:underline">{d.data.forgotPassword}</a>
            <ButtonSendAuth/>
            <p className="text-white font-monteserrat font-medium">
                {d.data.haveNotAccount} 
                <a href="#" className="text-white font-monteserrat font-bold ml-1 hover:underline">{d.data.createAccount}</a>
            </p>
        </form>  
    )
}