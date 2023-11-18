import InputCadastreStudent from "./ui/InputCadastreStudent"
import * as d from "../data/formCadastreStudent"
import ButtonWhite from "./ui/ButtonWhite"
import ButtonGreen from "./ui/ButtonGreen"
import SelectCadastreStudent from "./ui/SelectCadastreStudent"

//Medidas componentes
const widths = {
    fullname: 'w-[440px]',
    registrationNumber: 'w-[265px]',
    email: 'w-[386px]',
    course: 'w-[319px]',
    password: 'w-[355px]',
    passwordConfirm: 'w-[355px]',
    buttonWhite: 'w-[140px]',
    buttonGreen: 'w-[180px]'
}

const heights = {
    buttonWhite: 'h-[44px]',
    buttonGreen: 'h-[44px]',
}

const marginRight = {
    div1: 'mr-[38px]',
    div2: 'mr-[38px]',
    div3: 'mr-[33px]',
    buttonWhite: 'mr-[62px]'
}

export default function FormCadastreStudent() {
    return (
        <form className="w-[965px] h-[550px] px-[54px] py-[47px] mb-[49px]">
            <h1 className="text-white text-[30px] font-semibold">{d.data.title}</h1>
            <h2 className="text-white text-[20px] font-medium">{d.data.subtitle}</h2>
            <div className="flex flex-row mt-[47px]">
                <InputCadastreStudent
                    id={d.fullName.id}
                    label={d.fullName.label}
                    placeHolder={d.fullName.placeHolder}
                    width={widths.fullname}
                    mr={marginRight.div1}
                />
                <InputCadastreStudent
                    id={d.registrationNumber.id}
                    label={d.registrationNumber.label}
                    placeHolder={d.registrationNumber.placeHolder}
                    width={widths.registrationNumber}
                />
            </div>
            <div className="flex flex-row mt-[38px]">
                <InputCadastreStudent
                    id={d.email.id}
                    label={d.email.label}
                    placeHolder={d.email.placeHolder}
                    width={widths.email}
                    mr={marginRight.div2}
                />
                {/* <InputCadastreStudent
                    id={d.course.id}
                    label={d.course.label}
                    placeHolder={d.course.placeHolder}
                    width={widths.course}
                /> */}
                <SelectCadastreStudent
                    id={d.course.id}
                    label={d.course.label}
                    placeHolder={d.course.placeHolder}
                    options={d.course.options}
                    width={widths.course}
                />
            </div>
            <div className="flex flex-row mt-[38px] mb-[57px]">
                <InputCadastreStudent
                    id={d.password.id}
                    label={d.password.label}
                    placeHolder={d.password.placeHolder}
                    width={widths.password}
                    mr={marginRight.div3}
                />
                <InputCadastreStudent
                    id={d.passwordConfirm.id}
                    label={d.passwordConfirm.label}
                    placeHolder={d.passwordConfirm.placeHolder}
                    width={widths.passwordConfirm}
                />
            </div>
            <div className="flex justify-center ">
                <ButtonWhite
                    text={d.buttonWhite.text}
                    width={widths.buttonWhite}
                    height={heights.buttonWhite}
                    mr={marginRight.buttonWhite}
                />
                <ButtonGreen
                    text={d.buttonGreen.text}
                    width={widths.buttonGreen}
                    height={heights.buttonGreen}
                />
            </div>
        </form>
    )
}