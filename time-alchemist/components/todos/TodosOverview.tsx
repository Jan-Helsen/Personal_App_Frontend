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
                <ul>
                    {todos.map((todo: Todo) => (
                        <li className="flex justify-between" key={todo.id}>
                            <h3>{todo.name}</h3>
                            <p>{todo.description}</p>
                            { update && (
                                <Input label="X" type="button" value={update} setValue={() => handleDelete(todo.id)} required={false} error="" />
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