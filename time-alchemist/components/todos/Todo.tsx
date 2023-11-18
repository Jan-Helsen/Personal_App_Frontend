import { Todo, StatusMessage } from "@/types";
import AddTodo from "./AddTodo";
import TodosOverview from "./TodosOverview";

type Props = {
    todos: Todo[];
    userId: number;
    setStatusMessage: (statusMessage: StatusMessage) => void;
    token: string;
}

const Todos: React.FC<Props> = (props: Props) => {

    const { todos, userId, setStatusMessage, token } = props;

    return (
        <div className="min-h-[85%] w-[100%] flex flex-row">
            { todos.length === 0 ? (
                <>
                    <h2 className="text-3xl">No todos yet</h2>
                </>
            ) : (
                <>
                    <TodosOverview todos={todos} />
                </>
            ) }
            <AddTodo setStatusMessage={setStatusMessage} token={token} userId={userId} />
        </div>
    )
}

export default Todos;