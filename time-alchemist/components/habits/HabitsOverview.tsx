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
                    // get user oproepen voor te refreshen
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
                <ul className="h-full">
                    <li className="flex pb-1 justify-between border-b-2 border-[#cccccc65]">
                        <h3 className="w-[22%]">Name</h3>
                        <p className="w-[55%]">Description</p>
                        <p>Streak</p>
                    </li>
                    {habits.map((habit: Habit) => (
                        <li className="flex justify-between items-center h-[7%]" key={habit.id}>
                            <h3 className="w-[22%]">{habit.name}</h3>
                            <p className="w-[55%]">{habit.description}</p>
                            <p>{habit.streak}</p>
                            { update && (
                                <button className='m-2 bg-blue-500 hover:bg-blue-600 rounded-md py-1 px-3 duration-125 shadow' onClick={() => handleDelete(habit.id)}>X</button>
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