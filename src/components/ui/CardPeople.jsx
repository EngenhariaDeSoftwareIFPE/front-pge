export default function CardPeople(props) {
    const data = {
        name: props.name,
        registrationNumber: props.registrationNumber,
        course: props.course,
        sector: props.sector,
    }

    return (
        <div className="bg-secundary-green w-[331px] h-[78px] rounded-[12px] p-[10px] mt-[69px]">
            <div className="flex items-start">
                <img
                    src="../ic_user.svg"
                    alt="Icone usuário"
                />
                <p className="text-white font-medium text-[18px] ml-[5px]">{data.name}</p>
            </div>
            <p className="text-white font-medium text-[12px]">{data.sector ? `${data.sector} - ${data.course}` : data.course}</p>
            <p className="text-white font-medium text-[12px]">{data.registrationNumber}</p>
        </div>
    )
}