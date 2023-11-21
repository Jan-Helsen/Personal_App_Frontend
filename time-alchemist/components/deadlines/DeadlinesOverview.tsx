import { Deadline } from "@/types";
import Input from "../reusable/Input";
import { deleteDeadline } from "@/services/deadlineService";
import { useRouter } from "next/navigation";

type Props = {
    deadlines: Deadline[];   
    token: string;   
    update: boolean;
    setUpdate: (update: boolean) => void;
}

const DeadlineOverview: React.FC<Props> = (props: Props) => {

    const router = useRouter(); 

    const { deadlines, update, setUpdate, token } = props;

    const handleDelete = (id: number) => {
        deleteDead(id);
    }

    const deleteDead = async (id: number) => {
        if (token) {
            try {
                const deadline = await deleteDeadline({ id, token }) 
                setTimeout(() => {
                    router.replace("/deadlines");
                }, 2000) 
            } 
            catch (error) {
                
            }
        }
    }

    return (
        <div className="w-1/2 p-12">
            <div className="flex flex-col justify-between justify-items-center w-5/6 h-3/4 p-4 rounded-lg bg-gradient-to-b from-[#178cc6] to-[#005e59]">
                <ul>
                    {deadlines.map((deadline: Deadline) => (
                        <li className="flex justify-between" key={deadline.id}>
                            <h3>{deadline.name}</h3>
                            <p>{deadline.subject}</p>
                            <p>{deadline.description}</p>
                            <p>{new Date(deadline.endDate).toLocaleString()}</p>
                            { update && (
                                <Input label="X" type="button" value={update} setValue={() => handleDelete(deadline.id)} required={false} error="" />
                                )}
                        </li>
                    ))}
                </ul>
            <Input label="Edit" type="button" value={update} setValue={setUpdate} required={false} error="" />
            </div>
        </div>
    )
};

export default DeadlineOverview;