export default function InputCadastreStudent(props) {
    const data = {
        label: props.label,
        id: props.id,
        placeHolder: props.placeHolder,
        width: props.width,
        mr: props.mr,
    }

    return (
        <div className="flex flex-col">
            <label className="text-[18px] text-white font-medium">{data.label}</label>
            <input
                className={`${data.width} ${data.mr} h-[40px] rounded-[12px] px-[20px] hover:border-b-2 border-secundary-green transition duration-300 ease-in-out`}
                id={`${data.id}`}
                placeholder={`${data.placeHolder}`}
            />
        </div> 
    )
}