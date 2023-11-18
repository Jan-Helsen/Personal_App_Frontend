import { Habit, StatusMessage } from "@/types";
import AddHabit from "./AddHabit";
import HabitsOverview from "./HabitsOverview";


type Props = {
    habits: Habit[];
    userId: number;
    setStatusMessage: (statusMessage: StatusMessage) => void;
    token: string;
}

const Habits: React.FC<Props> = (props: Props) => {
    
        const { habits, userId, setStatusMessage, token } = props;
    
        return (
            <div className="min-h-[85%] w-[100%] flex flex-row">
                { habits.length === 0 ? (
                    <>
                        <h2 className="text-3xl">No habits yet</h2>
                    </>
                ) : (
                    <>
                        <HabitsOverview habits={habits} />
                    </>
                ) }
                <AddHabit setStatusMessage={setStatusMessage} token={token} userId={userId} />
            </div>
        )
}

export default Habits;