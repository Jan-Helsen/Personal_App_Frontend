import { Todo } from "@/types";
import Input from "../reusable/Input";
import { deleteTodo } from "@/services/todoService";
import { useRouter } from "next/navigation";

type Props = {
    todos: Todo[];
    token: string;
    update: boolean;
    setUpdate: (update: boolean) => void;
}

const TodosOverview: React.FC<Props> = (props: Props) => {

    const router = useRouter();

    const { todos, update, setUpdate, token } = props;

    const handleDelete = (id: number) => {
        deleteTod(id);
    }

    const deleteTod = async (id: number) => {
        if (token){
            try {
                const todo = await deleteTodo({ id, token })
                setTimeout(() => {
                    // get user oproepen voor te refreshen
                    router.replace("/todos");
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
                        <h3 className="w-[20%]">Name</h3>
                        <p className={`w-[70%] ${update ? "text-center": "text-end"}`}>Description</p>
                    </li>
                    {todos.map((todo: Todo) => (
                        <li className="flex justify-between items-center h-[7%]" key={todo.id}>
                            <h3 className="w-[20%]">{todo.name}</h3>
                            <p className={`w-[70%] ${update ? "text-center": "text-end"}`}>{todo.description}</p>
                            { update && (
                                <button className='m-2 bg-blue-500 hover:bg-blue-600 rounded-md py-1 px-3 duration-125 shadow' onClick={() => handleDelete(todo.id)}>X</button>
                                )}
                        </li>
                    ))}
                </ul>
                <Input label="Edit" type="button" value={update} setValue={setUpdate} required={false} error="" />
            </div>
        </div>
    )
}

export default TodosOverview;