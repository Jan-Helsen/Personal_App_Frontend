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
                {habits.length > 0 ? (
                    <ul className="flex-col ">
                        <li className="flex pb-1 justify-between border-b-2 border-[#cccccc65]">
                            <h3 className="w-[20%]">Name</h3>
                            <p className="w-[60%]">Description</p>
                            <p className="w-[10%]">Streak</p>
                        </li>
                        {habits.map((habit: Habit) => (
                            <li className="flex justify-between" key={habit.id}>
                                <h3 className="w-[20%]">{habit.name}</h3>
                                <p className="w-[60%]">{habit.description}</p>
                                <p className="w-[10%] text-center">{habit.streak}</p>
                            </li>
                    ))}
                    </ul>
                    ) : (
                    <p className="text-center">
                        No habits yet
                    </p>
                )}
        </div>
    )
}

export default HomeHabits;