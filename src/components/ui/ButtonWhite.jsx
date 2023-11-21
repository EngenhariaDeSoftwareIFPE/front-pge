"use client";

export default function ButtonWhite(props) {
    const data = {
        text: props.text,
        width: props.width,
        height: props.height,
        mr: props.mr
    }

    return (
        <button onClick={() => props.onClick()} className={`${data.width} ${data.height} ${data.mr} drop-shadow-xl bg-white text-black rounded-[10px] font-bold text-[20px] hover:bg-primary-white`}>
            {data.text}
        </button>
    )
}