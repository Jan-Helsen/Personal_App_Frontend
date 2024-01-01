import { Habit } from '@/types';
import React, { useState } from 'react';

type Props = {
    habitz: Habit[];
}

const HomeHabits: React.FC<Props> = (props: Props) => {
    const [habits, setHabits] = useState<Habit[]>(props.habitz);

    return (
        <div className="bg-gradient-to-b from-[#178cc6] to-[#005e59] bg-opacity-90 rounded-3xl w-11/12 h-5/6 p-4">
            <h2 className="text-2xl pb-2 text-center font-bold text-white">Habits</h2>
            <ul>
                {habits.length > 0 ? (
                    <ul>
                        {habits.map((habit: Habit) => (
                            <li className="flex justify-between" key={habit.id}>
                                <h3>{habit.name}</h3>
                                <p>{habit.description}</p>
                                <p>{habit.streak}</p>
                            </li>
                    ))}
                    </ul>
                    ) : (
                    <p className="text-center">
                        No habits yet
                    </p>
                )}
            </ul>
        </div>
    )
}

export default HomeHabits;