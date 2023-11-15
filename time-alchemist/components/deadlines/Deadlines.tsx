import AddDeadline from "./AddDeadline";
import DeadlinesOverview from "./DeadlinesOverview";
import { Deadline } from "@/types";


type Props = {
    deadlines: Deadline[];
}

const Deadlines: React.FC<Props> = (props: Props) => {

    const { deadlines } = props;

    return (
        <div className="min-h-[85%] w-[100%] flex flex-row">
            <DeadlinesOverview deadlines={deadlines} />
            <AddDeadline />
		</div>
    )
};

export default Deadlines;