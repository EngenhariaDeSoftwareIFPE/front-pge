import * as d from '../data/people'

import InputSearchPeople from './ui/InputSearchPeople';
import CardPeople from './ui/CardPeople';

import { useState } from 'react';

export default function StudentPeople() {
    const [handleStudents, setHandleStudents] = useState('');

    const renderStudents = (students) => {
        const filteredStudents = students
            .filter((student) => student.name.toLowerCase().includes(handleStudents.toLowerCase()))
            .sort((a, b) => a.name.localeCompare(b.name));
    
        return filteredStudents.map((student) => (
            <CardPeople
                key={student.registrationNumber}
                name={student.name}
                course={student.course}
                registrationNumber={student.registrationNumber}
            />
        ));
    }
    return (
        <div className='w-[1200px] mx-auto'>
            <InputSearchPeople
                id={d.studentInputSearch.id}
                handleStudents={handleStudents}
                setHandleStudents={setHandleStudents}
                placeHolder={d.studentInputSearch.placeHolder}
            />
            <div className='flex justify-between flex-wrap'>
                {renderStudents(d.dataStudent)}
            </div>
        </div>
    )
}