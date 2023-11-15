import { Habit } from '@/types';
import React, { useState } from 'react';

type Props = {
    habitz: Habit[];
}

const HomeHabits: React.FC<Props> = (props: Props) => {
    const [habits, setHabits] = useState<Habit[]>(props.habitz);

    return (
        <div className="shadow-[0px_0px_65px_0px_rgba(0,140,130,0.5)] bg-gradient-to-b from-[#178cc6] to-[#005e59] bg-opacity-90 rounded-3xl w-10/12 h-3/4 p-4">
            <ul>
                {habits.length > 0 && habits.map((habit: Habit) => (
                    <li className="flex justify-between" key={habit.id}>
                        <h3>{habit.name}</h3>
                        <p>{habit.description}</p>
                        <p>{habit.streak}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomeHabits;