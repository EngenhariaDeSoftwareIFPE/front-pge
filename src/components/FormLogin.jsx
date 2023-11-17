import ButtonSendAuth from "./ui/ButtonGreen"
import InputLogin from "./ui/InputLogin"
import * as d from "../data/formLogin"

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

export default function FormLogin() {
    return (
        <form className="flex items-center justify-center flex-col w-full h-full">
            <label className="text-white text-[30px] font-monteserrat">{d.data.login}</label>
            <InputLogin
                id={d.email.id}
                placeHolder={d.email.placeHolder}
                marginTop={email.mt}
                marginBottom={email.mb}
            />
            <InputLogin
                id={d.password.id}
                placeHolder={d.password.placeHolder}
                marginTop={password.mt}
                marginBottom={password.mb}
            />
            <a href="#" className="w-[345px] text-end text-white font-monteserrat font-bold mb-[41px] hover:underline">{d.data.forgotPassword}</a>
            <ButtonSendAuth
                text={d.button.text}
                width={button.width}
                height={button.height}
            />
            <p className="text-white font-monteserrat font-medium">
                {d.data.haveNotAccount} 
                <a href="#" className="text-white font-monteserrat font-bold ml-1 hover:underline">{d.data.createAccount}</a>
            </p>
        </form>  
    )
}