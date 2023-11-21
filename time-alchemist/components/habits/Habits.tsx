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
                        <h2 className="text-3xl text-center">No habits yet</h2>
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