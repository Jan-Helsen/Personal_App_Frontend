import { Deadline } from "@/types";

type Props = {
    deadlines: Deadline[];        
}

const DeadlineOverview: React.FC<Props> = (props: Props) => {

    const { deadlines } = props;

    return (
        <div className="w-1/2 p-12">
            <ul className="w-3/4 h-3/4 m-auto p-4 rounded-lg bg-gradient-to-b from-[#178cc6] to-[#005e59]">
                {deadlines.map((deadline: Deadline) => (
                    <li className="flex justify-between" key={deadline.id}>
                        <h3>{deadline.subject}</h3>
                        <p>{deadline.description}</p>
                        <p>{new Date(deadline.endDate).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default DeadlineOverview;