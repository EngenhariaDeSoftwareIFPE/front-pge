import BackgroundAuth from "@/components/BackgroundAuth";
import FormForgotPasswordStep1 from "@/components/FormForgotPasswordStep1";

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