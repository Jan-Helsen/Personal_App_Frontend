import { Deadline } from '@/types';
import React, { useState } from 'react';

type Props = {
    deadlinez: Deadline[];
}


const HomeDeadlines: React.FC<Props> = (props: Props) => {
    const [deadlines, setDeadlines] = useState<Deadline[]>(props.deadlinez);

    return (
        <div className="col-start-1 row-start-2 shadow-[0px_0px_65px_0px_rgba(0,140,130,0.5)] bg-gradient-to-b from-[#178cc6] to-[#005e59] rounded-3xl w-10/12 h-3/4 p-4">
            <ul>
                {deadlines.map((deadline: Deadline) => (
                    <li className="flex justify-between" key={deadline.id}>
                        <h3>{deadline.name}</h3>
                        <p>{deadline.subject}</p>
                        <p>{new Date(deadline.endDate).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomeDeadlines;