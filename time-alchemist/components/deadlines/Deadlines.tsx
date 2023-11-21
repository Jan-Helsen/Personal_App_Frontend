import Input from "../reusable/Input";
import AddDeadline from "./AddDeadline";
import DeadlinesOverview from "./DeadlinesOverview";
import { Deadline, StatusMessage } from "@/types";
import { useState } from "react";

type Props = {
    token: string;
    userId: number;
    deadlines: Deadline[];
    setStatusMessage: (statusMessage: StatusMessage) => void; 
}

const Deadlines: React.FC<Props> = (props: Props) => {
	const [update, setUpdate] = useState<boolean>(false);

    const { token, userId, deadlines, setStatusMessage } = props;

    return (
        <div className="min-h-[85%] w-[100%] flex flex-row">
            { deadlines.length === 0 ? (
                <div className="w-1/2 p-12">
                    <h2 className="text-3xl text-center">No deadlines yet</h2>
                </div>
            ) : (
                <>
                    <DeadlinesOverview deadlines={deadlines} update={update} setUpdate={setUpdate} token={token} />
                </>
            )}
            <AddDeadline setStatusMessage={setStatusMessage} token={token} userId={userId} />
		</div>
    )
};

export default Deadlines;