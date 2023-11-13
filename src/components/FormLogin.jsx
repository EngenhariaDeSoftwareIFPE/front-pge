import ButtonSendAuth from "./ui/ButtonSendAuth"
import InputLogin from "./ui/InputLogin"

export default function FormLogin() {
    const data = {  
        login: 'Login',
        forgotPassword: 'Esqueceu a senha?',
        haveNotAccount: 'Não possui conta?',
        createAccount: 'Criar conta',
        placeHolders: [
            'E-mail',
            'Senha',
        ]
    }

    return (
        <form className="flex items-center justify-center flex-col w-full h-full">
            <label className="text-white text-30px font-monteserrat">{data.login}</label>
            <InputLogin
                id={'email'}
                placeHolder={data.placeHolders[0]}
                marginTop={'mt-26px'}
                marginBottom={'mb-21px'}
            />
            <InputLogin
                id={'password'}
                placeHolder={data.placeHolders[1]}
                marginTop={'mt-0'}
                marginBottom={'mb-0'}
            />
            <a href="#" className="w-345px text-end text-white font-monteserrat font-bold mb-41px hover:underline">{data.forgotPassword}</a>
            <ButtonSendAuth/>
            <p className="text-white font-monteserrat font-medium">
                {data.haveNotAccount} 
                <a href="#" className="text-white font-monteserrat font-bold ml-1 hover:underline">{data.createAccount}</a>
            </p>
        </form>  
    )
}