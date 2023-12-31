export default function InputCalendar(props) {
    const data = {
        id: props.id,
        placeHolder: props.placeHolder,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
    }

    return (
        <input 
            type="date"
            className={`w-[205px] h-[40px] rounded-[12px] p-[22px] font-semibold hover:border-b-2 border-secundary-green transition duration-300 ease-in-out ${data.marginTop} ${data.marginBottom}`}
            id={`${data.id}`}
            placeholder={`${data.placeHolder}`}
        />
    )
}