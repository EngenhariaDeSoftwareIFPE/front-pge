export default function InputLogin(props) {
    const data = {
        id: props.id,
        field: props.id,
        placeHolder: props.placeHolder,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        user: props.user,
        setUser: props.setUser,
    }

    const handleChange = (field, value) => {
        data.setUser(prevUser => ({
            ...prevUser,
            [field]: value,
        }))
    }

    return (
        <input 
            className={`w-[345px] h-[40px] rounded-[12px] p-[22px] font-semibold hover:border-b-2 border-secundary-green transition duration-300 ease-in-out ${data.marginTop} ${data.marginBottom}`}
            id={`${data.id}`}
            placeholder={`${data.placeHolder}`}
            value={data.user[data.field]}
            onChange={(e) => handleChange(data.field, e.target.value)}
        />
    )
}