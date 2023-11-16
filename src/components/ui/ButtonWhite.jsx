export default function ButtonWhite(props) {
    const data = {
        text: props.text,
        width: props.width,
        height: props.height,
    }

    return (
        <button className={`${data.width} ${data.height} bg-white text-black rounded-[10px] font-bold text-[20px] hover:bg-primary-white`}>
            {data.text}
        </button>
    )
}