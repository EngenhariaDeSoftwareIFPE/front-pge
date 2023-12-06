import BackgroundAuth from "@/components/BackgroundAuth"
import FormLogin from "@/components/FormLogin"

export const metadata = {
    title: 'PGE | Login',
    description: 'Login PGE',
}

export default function Login() {
    const component = <FormLogin/>

    return (
        <>
            <BackgroundAuth component={component}/>
        </>
    )
}