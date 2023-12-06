export default function InputCadastreSignatorie(props) {
    const {
        width,
        placeHolder,
        label,
        mr,
        mb,
    } = props;

    return (
        <div className="flex flex-col">
            <label className="text-[18px] text-white font-medium">{label}</label>
            <input
                className={`${width} ${placeHolder} ${mr} ${mb} h-[40px] rounded-[12px] px-[20px] hover:border-b-2 border-secundary-green transition duration-300 ease-in-out`}
                placeholder={placeHolder}

            />
        </div>
    )
}