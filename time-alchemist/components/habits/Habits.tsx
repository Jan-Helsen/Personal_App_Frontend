import { Habit, StatusMessage } from "@/types";
import AddHabit from "./AddHabit";
import HabitsOverview from "./HabitsOverview";
import { useState } from "react";


type Props = {
    habits: Habit[];
    userId: number;
    setStatusMessage: (statusMessage: StatusMessage) => void;
    token: string;
}

const Habits: React.FC<Props> = (props: Props) => {
    const [update, setUpdate] = useState<boolean>(false);
    
        const { habits, userId, setStatusMessage, token } = props;
    
        return (
            <div className="min-h-[85%] w-[100%] flex flex-row">
                { habits.length === 0 ? (
                    <div className="w-1/2 p-12">
                        <div className="flex flex-col justify-between justify-items-center w-5/6 h-3/4 m-auto p-4 rounded-lg bg-gradient-to-b from-[#178cc6] to-[#005e59]">
                            <h2 className="text-3xl text-center">No habits yet</h2>
                        </div>
                    </div>
                ) : (
                    <>
                        <HabitsOverview habits={habits} update={update} setUpdate={setUpdate} token={token} />
                    </>
                ) }
                <AddHabit setStatusMessage={setStatusMessage} token={token} userId={userId} />
            </div>
        )
}

export default Habits;