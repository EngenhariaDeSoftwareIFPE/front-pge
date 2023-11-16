import InputCadastreStudent from "./ui/InputCadastreStudent"
import * as d from "../data/FormCadastreStudent"
import ButtonWhite from "./ui/ButtonWhite"
import ButtonGreen from "./ui/ButtonGreen"

const widths = {
    fullname: 'w-[440px]',
    registrationNumber: 'w-[273px]',
    email: 'w-[386px]',
    course: 'w-[319px]',
    password: 'w-[355px]',
    passwordConfirm: 'w-[355px]',
    buttonWhite: 'w-[140px]',
    buttonGreen: 'w-[180px]'
}

const height = {
    buttonWhite: 'h-[44px]',
    buttonGreen: 'h-[44px]',
}

export default function FormCadastreStudent() {
    return (
        <form className="w-[965px] h-[550px] px-[54px] py-[47px]">
            <h1 className="text-white text-[30px] font-semibold">{d.data.title}</h1>
            <h2 className="text-white text-[20px] font-medium">{d.data.subtitle}</h2>
            <div className="flex flex-row mt-[47px] justify-around">
                <InputCadastreStudent
                    id={d.fullName.id}
                    label={d.fullName.label}
                    placeHolder={d.fullName.placeHolder}
                    width={widths.fullname}
                />
                <InputCadastreStudent
                    id={d.registrationNumber.id}
                    label={d.registrationNumber.label}
                    placeHolder={d.registrationNumber.placeHolder}
                    width={widths.registrationNumber}
                />
            </div>
            <div className="flex flex-row mt-[38px] justify-around">
                <InputCadastreStudent
                    id={d.email.id}
                    label={d.email.label}
                    placeHolder={d.email.placeHolder}
                    width={widths.email}
                />
                <InputCadastreStudent
                    id={d.course.id}
                    label={d.course.label}
                    placeHolder={d.course.placeHolder}
                    width={widths.course}
                />
            </div>
            <div className="flex flex-row mt-[38px] justify-around">
                <InputCadastreStudent
                    id={d.password.id}
                    label={d.password.label}
                    placeHolder={d.password.placeHolder}
                    width={widths.password}
                />
                <InputCadastreStudent
                    id={d.passwordConfirm.id}
                    label={d.passwordConfirm.label}
                    placeHolder={d.passwordConfirm.placeHolder}
                    width={widths.passwordConfirm}
                />
            </div>
            <div className="flex flex-row">
                <ButtonWhite
                    text={d.buttonWhite.text}
                    width={widths.buttonWhite}
                    height={height.buttonWhite}
                />
                <ButtonGreen
                    text={d.buttonGreen.text}
                    width={widths.buttonGreen}
                    height={height.buttonGreen}
                />
            </div>
        </form>
    )
}