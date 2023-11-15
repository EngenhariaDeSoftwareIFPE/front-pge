

export default function InputCadastreStudent(props) {
    const data = {
        label: props.label,
        id: props.id,
        placeHolder: props.placeHolder,
        width: props.width,
    }

    return (
        <div className="flex flex-col mr-[38px]">
            <label className="text-[18px] text-white font-medium">{data.label}</label>
            <input
                className={`${data.width} h-[40px] rounded-[12px] px-[20px] hover:border-b-2 border-secundary-green transition duration-300 ease-in-out`}
                id={`${data.id}`}
                placeholder={`${data.placeHolder}`}
            />
        </div> 
    )
}