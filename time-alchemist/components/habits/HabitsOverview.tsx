import { Habit } from "@/types";

type Props = {
    habits: Habit[];
}

const HabitsOverview: React.FC<Props> = (props: Props) => {

    const { habits } = props;

    return (
        <div className="w-1/2 p-12">
            <ul className="w-5/6 h-3/4 m-auto p-4 rounded-lg bg-gradient-to-b from-[#178cc6] to-[#005e59]">
                {habits.map((habit: Habit) => (
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

export default HabitsOverview;