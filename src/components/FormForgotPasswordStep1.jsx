import ButtonGreen from "./ui/ButtonGreen";
import ButtonWhite from "./ui/ButtonWhite";
import InputForgotPassword from "./ui/InputForgotPassword";

export default function FormForgotPasswordStep1() {
    const data = {
        title: 'Esqueceu a senha?',
        subtitle: 'Insira seu e-mail para recuperar a senha de acesso da sua conta',
    }

    const email = {
        id: 'email',
        placeHolder: 'E-mail',
        mt: 'mt-[54px]',
        mb: 'mb-[54px]',
    }

    const buttonWhite = {
        text: 'Voltar',
        width: 'w-[140px]',
        height: 'h-[45px]',
    }

    const buttonGreen = {
        text: 'Enviar',
        width: 'w-[140px]',
        height: 'h-[45px]',
    }

    const marginRight = {
        buttonWhite: 'mr-[27px]',
    }
    return (
        <form className="flex items-center justify-center flex-col w-full h-full">
            <div className="w-[340px] text-center">
                <h1 className="text-white text-[30px] font-semibold">{data.title}</h1>
                <h2 className="text-white text-[16px] font-normal">{data.subtitle}</h2>
            </div>
            <InputForgotPassword
                id={email.id}
                placeHolder={email.placeHolder}
                marginTop={email.mt}
                marginBottom={email.mb}
            />
            <div className="flex flex-row">
                <ButtonWhite
                    text={buttonWhite.text}
                    width={buttonWhite.width}
                    height={buttonWhite.height}
                    mr={marginRight.buttonWhite}
                />
                <ButtonGreen
                    text={buttonGreen.text}
                    width={buttonGreen.width}
                    height={buttonGreen.height}
                />
            </div>
        </form>
    )
}