import BackgroundAuth from "@/components/BackgroundAuth";
import FormForgotPasswordStep1 from "@/components/FormForgotPasswordStep1";

export const metadata = {
    title: 'PGE | Recuperação de senha',
    description: 'Login PGE',
}

export default function PasswordReset() {
    const components = [
        <FormForgotPasswordStep1/>
    ]

    return (
        <>
            <BackgroundAuth component={components[0]}/>
        </>
    )
}