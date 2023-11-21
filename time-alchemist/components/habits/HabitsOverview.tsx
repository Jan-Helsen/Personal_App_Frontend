import { Habit } from "@/types";
import Input from "../reusable/Input";
import { deleteHabit } from "@/services/habitService";
import { useRouter } from "next/navigation";

type Props = {
    habits: Habit[];
    token: string;
    update: boolean;
    setUpdate: (update: boolean) => void;
}

const HabitsOverview: React.FC<Props> = (props: Props) => {

    const router = useRouter();

    const { habits, update, setUpdate, token } = props;

    const handleDelete = (id: number) => {
        deleteHabt(id);
    }

    const deleteHabt = async (id: number) => {
        if (token) {
            try {
                const habit = await deleteHabit({ id, token })  
                setTimeout(() => {
                    router.replace("/habits");
                }, 2000) 
            } 
            catch (error) {
                
            }
        }
    }

    return (
        <div className="w-1/2 p-12">
            <div className="flex flex-col justify-between justify-items-center w-5/6 h-3/4 m-auto p-4 rounded-lg bg-gradient-to-b from-[#178cc6] to-[#005e59]">
                <ul>
                    {habits.map((habit: Habit) => (
                        <li className="flex justify-between" key={habit.id}>
                            <h3>{habit.name}</h3>
                            <p>{habit.description}</p>
                            <p>{habit.streak}</p>
                            { update && (
                                <Input label="X" type="button" value={update} setValue={() => handleDelete(habit.id)} required={false} error="" />
                                )}
                        </li>
                    ))}
                </ul>
                <Input label="Edit" type="button" value={update} setValue={setUpdate} required={false} error="" />
            </div>
        </div>
    )
}

export default HabitsOverview;