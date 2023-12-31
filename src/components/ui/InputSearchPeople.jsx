export default function InputSearchPeople(props) {
    const data = {
        id: props.id,
        placeHolder: props.placeHolder,
        handleStudents: props.handleStudents,
        setHandleStudents: props.setHandleStudents,
        handleSignatories: props.handleSignatories,
        setHandleSignatories: props.setHandleSignatories,
    }

    const filterStudent = (e) => {
        return data.setHandleStudents(e.target.value)
    }

    const filterSignatorie = (e) => {
        return data.setHandleSignatories(e.target.value)
    }

    return (
        <div className="relative flex items-center w-[412px] h-[44px] rounded-[10px] focus-within:shadow-lg overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300 bg-secundary-green">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input
                className="h-full w-full outline-none text-[18px] font-medium text-white pr-2 bg-secundary-green"
                type="text"
                id="search"
                value={data.id === 'students' ? data.handleStudents : data.handleSignatories}
                onChange={data.id === 'students' ? filterStudent : filterSignatorie}
                placeholder={data.placeHolder}
            />
        </div>
    )
}
