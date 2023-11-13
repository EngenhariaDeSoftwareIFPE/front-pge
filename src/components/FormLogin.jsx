import ButtonSendAuth from "./ui/ButtonSendAuth"

export default function FormLogin() {
    const data = {  
        login: 'Login',
        forgotPassword: 'Esqueceu a senha?',
        haveNotAccount: 'Não possui conta?',
        createAccount: 'Criar conta',
    }

    return (
        <form className="flex items-center justify-center flex-col w-full h-full">
            <label className="text-white text-30px font-monteserrat">{data.login}</label>
            <input 
                className="w-345px h-40px rounded-12px mb-21px mt-26px p-22px font-semibold hover:border-b-2 border-secundary-green transition duration-300 ease-in-out"
                placeholder="E-mail"
            />
            <input 
                className="w-345px h-40px rounded-12px p-22px hover:border-b-2 border-secundary-green transition duration-300 ease-in-out"
                placeholder="Senha"
            />
            <p className="w-345px text-end text-white font-monteserrat font-bold mb-41px hover:underline">{data.forgotPassword}</p>
            <ButtonSendAuth/>
        </form>  
    )
}