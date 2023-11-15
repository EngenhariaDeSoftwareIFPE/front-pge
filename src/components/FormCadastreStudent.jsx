import InputCadastreStudent from "./ui/InputCadastreStudent"
import * as d from "../data/FormCadastreStudent"

export default function FormCadastreStudent() {
    return (
        <form className="w-[965px] h-[550px] px-[54px] py-[47px]">
            <h1 className="text-white text-[30px] font-semibold">{d.data.title}</h1>
            <h2 className="text-white text-[20px] font-medium">{d.data.subtitle}</h2>
            <div className="flex flex-row mt-[47px]">
                <InputCadastreStudent
                    id={d.fullName.id}
                    label={d.fullName.label}
                    placeHolder={d.fullName.placeHolder}
                    width={`w-${d.fullName.width}`}
                />
                <InputCadastreStudent
                    id={d.registrationNumber.id}
                    label={d.registrationNumber.label}
                    placeHolder={d.registrationNumber.placeHolder}
                    width={`w-${d.registrationNumber.width}`}
                />
            </div>
            <div className="flex flex-row mt-[38px]">
                <InputCadastreStudent
                    id={d.email.id}
                    label={d.email.label}
                    placeHolder={d.email.placeHolder}
                    width={`w-${d.email.width}`}
                />
                <InputCadastreStudent
                    id={d.course.id}
                    label={d.course.label}
                    placeHolder={d.course.placeHolder}
                    width={`w-${d.course.width}`}
                />
            </div>
            <div className="flex flex-row mt-[38px]">
                <InputCadastreStudent
                    id={d.password.id}
                    label={d.password.label}
                    placeHolder={d.password.placeHolder}
                    width={`w-${d.password.width}`}
                />
                <InputCadastreStudent
                    id={d.passwordConfirm.id}
                    label={d.passwordConfirm.label}
                    placeHolder={d.passwordConfirm.placeHolder}
                    width={`w-${d.passwordConfirm.width}`}
                />
            </div>
        </form>
    )
}