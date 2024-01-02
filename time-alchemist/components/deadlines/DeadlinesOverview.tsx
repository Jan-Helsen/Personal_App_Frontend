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
                    // get user oproepen voor te refreshen
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
                <ul className="h-full">
                    <li className="flex pb-1 justify-between border-b-2 border-[#cccccc65]">
                        <h3 className="w-[15%]">Name</h3>
                        <p className="w-[15%]">Subject</p>
                        <p className="w-[55%]">Description</p>
                        <p className="w-[12%]">End date</p>
                    </li>
                    {deadlines.map((deadline: Deadline) => (
                        <li className="flex justify-between items-center gap-1 h-[7%]" key={deadline.id}>
                            <h3 className="w-[15%]">{deadline.name}</h3>
                            <p className="w-[15%]">{deadline.subject}</p>
                            <p className="w-[55%]">{deadline.description}</p>
                            <p className="w-[12%]">{new Date(deadline.endDate).toLocaleString()}</p>
                            { update && (
                                <button className='m-2 bg-blue-500 hover:bg-blue-600 rounded-md py-1 px-3 duration-125 shadow' onClick={() => handleDelete(deadline.id)}>X</button>
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