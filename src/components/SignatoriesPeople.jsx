import * as d from '../data/people'

import InputSearchPeople from './ui/InputSearchPeople';
import CardPeople from './ui/CardPeople';

export default function SignatoriesPeople() {
    const renderStudents = (signatories) => {
        return signatories.map((signatorie) => {
            return (
                <CardPeople
                    name={signatorie.name}
                    course={signatorie.course}
                    registrationNumber={signatorie.registrationNumber}
                />
            )
        })
    }

    return (
        <div>
            <InputSearchPeople
                data={d.test2}
                placeHolder={d.studentInputSearch.placeHolder}
            />
            <div className='w-full flex flex-wrap'>
                {renderStudents(d.test2)}
            </div>
        </div>
    )
}