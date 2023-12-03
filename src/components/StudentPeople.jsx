import * as d from '../data/people'

import InputSearchPeople from './ui/InputSearchPeople';
import CardPeople from './ui/CardPeople';

export default function StudentPeople() {
    const renderStudents = (students) => {
        return students.map((student) => {
            return (
                <CardPeople
                    name={student.name}
                    course={student.course}
                    registrationNumber={student.registrationNumber}
                />
            )
        })
    }

    return (
        <div>
            <InputSearchPeople
                data={d.test}
                placeHolder={d.studentInputSearch.placeHolder}
            />
            <div className='w-full flex flex-wrap'>
                {renderStudents(d.test)}
            </div>
        </div>
    )
}