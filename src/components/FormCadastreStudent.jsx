"use client";

import * as d from "../data/formCadastreStudent"
import * as v from "../validations/formCadastreStudent"

import InputCadastreStudent from "./ui/InputCadastreStudent"
import ButtonWhite from "./ui/ButtonWhite"
import ButtonGreen from "./ui/ButtonGreen"
import SelectCadastreStudent from "./ui/SelectCadastreStudent"
import Modal from "./Modal";

import { useState } from "react";
import { useRouter } from "next/navigation";

//Medidas componentes
const widths = {
    fullname: 'w-[440px]',
    registrationNumber: 'w-[265px]',
    email: 'w-[386px]',
    course: 'w-[319px]',
    password: 'w-[355px]',
    passwordConfirm: 'w-[355px]',
    buttonWhite: 'w-[140px]',
    buttonGreen: 'w-[180px]',
    buttonGreenPopup: 'w-[180px]',
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
    const router = useRouter();
    
    const [ showModal, setShowModal ] = useState(false);
    const [ student, setStudent ] = useState(d.model);
    const [ errors, setErrors ] = useState({});
    
    // Função de validação formulário
    const validateForm = (data) => {
        // Limpa os erros
        setErrors({});

        const result = v.schema.safeParse(data);

        if (result.success) {
            return setShowModal(true);
        } else {
            for (const fieldError of result.error.errors) {
                const field = fieldError.path[0];

                const errorMessage = fieldError.message;
    
                setErrors((currentErrors) => ({
                    ...currentErrors,
                    [field]: errorMessage,
                }));
            }
            return errors;
        }
    };

    return (
        <form 
            className="w-[965px] h-[550px] px-[54px] py-[47px] mb-[49px]"
            onSubmit={(e) => e.preventDefault()}
        >
            <h1 className="text-white text-[30px] font-semibold">{d.data.title}</h1>
            <h2 className="text-white text-[20px] font-medium">{d.data.subtitle}</h2>
            <div className="flex flex-row mt-[47px]">
                <InputCadastreStudent
                    errors={errors[d.fullName.id]}
                    id={d.fullName.id}
                    label={d.fullName.label}
                    placeHolder={d.fullName.placeHolder}
                    width={widths.fullname}
                    mr={marginRight.div1}
                    student={student}
                    setStudent={setStudent}
                />
                <InputCadastreStudent
                    errors={errors[d.registrationNumber.id]}
                    id={d.registrationNumber.id}
                    label={d.registrationNumber.label}
                    placeHolder={d.registrationNumber.placeHolder}
                    width={widths.registrationNumber}
                    student={student}
                    setStudent={setStudent}
                />
            </div>
            <div className="flex flex-row mt-[38px]">
                <InputCadastreStudent
                    errors={errors[d.email.id]}
                    id={d.email.id}
                    label={d.email.label}
                    placeHolder={d.email.placeHolder}
                    width={widths.email}
                    mr={marginRight.div2}
                    student={student}
                    setStudent={setStudent}
                />
                <SelectCadastreStudent
                    errors={errors[d.course.id]}
                    id={d.course.id}
                    label={d.course.label}
                    placeHolder={d.course.placeHolder}
                    options={d.course.options}
                    width={widths.course}
                    student={student}
                    setStudent={setStudent}
                />
            </div>
            <div className="flex flex-row mt-[38px] mb-[57px]">
                <InputCadastreStudent
                    errors={errors[d.password.id]}
                    type={d.password.type}
                    id={d.password.id}
                    label={d.password.label}
                    placeHolder={d.password.placeHolder}
                    width={widths.password}
                    mr={marginRight.div3}
                    student={student}
                    setStudent={setStudent}
                />
                <InputCadastreStudent
                    errors={errors[d.passwordConfirm.id]}
                    type={d.passwordConfirm.type}
                    id={d.passwordConfirm.id}
                    label={d.passwordConfirm.label}
                    placeHolder={d.passwordConfirm.placeHolder}
                    width={widths.passwordConfirm}
                    student={student}
                    setStudent={setStudent}
                />
            </div>
            <div className="flex justify-center ">
                <ButtonWhite
                    text={d.buttonWhite.text}
                    width={widths.buttonWhite}
                    height={heights.buttonWhite}
                    mr={marginRight.buttonWhite}
                    onClick={() => router.push(d.paths.login)}
                />
                <ButtonGreen
                    text={d.buttonGreen.text}
                    width={widths.buttonGreen}
                    height={heights.buttonGreen}
                    onClick={() => validateForm(student)}
                />
            </div>
            <Modal bgColor={"bg-[#3AC25E]"} isVisible={showModal} onClose={() => setShowModal(false)}>
                <img className='w-[100px]' src="../ic-shield-check.svg" alt="Ícone escudo de verificação" />
                <p className='text-white text-2xl font-medium'>{d.dataPopup.title}</p>
                <ButtonGreen
                    text={d.dataPopup.buttonGreenText}
                    width={widths.buttonGreenPopup}
                    height={heights.buttonGreen}
                    onClick={() => router.push(d.paths.login)}
                />
            </Modal>
        </form>
    )
}