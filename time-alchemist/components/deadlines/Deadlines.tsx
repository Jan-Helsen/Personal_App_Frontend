import AddDeadline from "./AddDeadline";
import DeadlinesOverview from "./DeadlinesOverview";
import { Deadline, StatusMessage } from "@/types";


type Props = {
    token: string;
    userId: number;
    deadlines: Deadline[];
    setStatusMessage: (statusMessage: StatusMessage) => void;  
}

const Deadlines: React.FC<Props> = (props: Props) => {

    const { token, userId, deadlines, setStatusMessage } = props;

    return (
        <div className="min-h-[85%] w-[100%] flex flex-row">
            { deadlines.length === 0 ? (
                <>
                    <h2 className="text-3xl">No deadlines yet</h2>
                </>
            ) : (
                <>
                    <DeadlinesOverview deadlines={deadlines} />
                </>
            )}
            <AddDeadline setStatusMessage={setStatusMessage} token={token} userId={userId} />
		</div>
    )
};

export default Deadlines;