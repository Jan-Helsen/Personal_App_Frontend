import { Deadline } from '@/types';
import React, { useState } from 'react';

type Props = {
    deadlinez: Deadline[];
}


const HomeDeadlines: React.FC<Props> = (props: Props) => {
    const [deadlines, setDeadlines] = useState<Deadline[]>(props.deadlinez);

    return (
        <div className="col-start-1 row-start-2 bg-gradient-to-b from-[#178cc6] to-[#005e59] rounded-3xl w-11/12 h-5/6 p-4">
            <h2 className="text-2xl pb-2 text-center font-bold text-white">Deadlines</h2>
                {deadlines.length > 0 ? (
                    <ul>
                        <li className="flex pb-1 justify-between border-b-2 border-[#cccccc65]">
                            <h3 className="w-[20%]">Name</h3>
                            <p className="w-[20%]">Subject</p>
                            <p className="w-[30%] ">End Date</p>
                            <p className="w-[20%]">Time left</p>
                        </li>
                        {deadlines.map((deadline: Deadline) => (
                            <li className="flex justify-between" key={deadline.id}>
                                <h3 className="w-[20%]">{deadline.name}</h3>
                                <p className="w-[20%]">{deadline.subject}</p>
                                <p className="w-[30%]">{new Date(deadline.endDate).toLocaleTimeString()} {new Date(deadline.endDate).toLocaleDateString()}</p>
                                <p className="w-[20%]">{}</p>
                            </li>
                    ))}
                    </ul>
                    ): (
                    <p className="text-center">
                        No deadlines yet
                    </p>
                )}
        </div>
    )
}

export default HomeDeadlines;