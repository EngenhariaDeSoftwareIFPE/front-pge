"use client";

export default function ButtonGreen(props) {
    const data = {
        text: props.text,
        width: props.width,
        height: props.height,
        mr: props.mr,
    }

    return (
        <button onClick={() => props.onClick()} className={`${data.width} ${data.height} ${data.mr} drop-shadow-xl bg-button-green rounded-[10px] font-bold text-white text-[20px] hover:bg-secundary-green`}>
            {data.text}
        </button>
    )
}