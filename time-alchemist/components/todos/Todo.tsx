import { Todo, StatusMessage } from "@/types";
import AddTodo from "./AddTodo";
import TodosOverview from "./TodosOverview";
import { useState } from "react";

type Props = {
    todos: Todo[];
    userId: number;
    setStatusMessage: (statusMessage: StatusMessage) => void;
    token: string;
}

const Todos: React.FC<Props> = (props: Props) => {
	const [update, setUpdate] = useState<boolean>(false);

    const { todos, userId, setStatusMessage, token } = props;

    return (
        <div className="min-h-[85%] w-[100%] flex flex-row">
            { todos.length === 0 ? (
                <div className="w-1/2 p-12">
                    <h2 className="text-3xl text-center">No todos yet</h2>
                </div>
            ) : (
                <>
                    <TodosOverview todos={todos} update={update} setUpdate={setUpdate} token={token} />
                </>
            ) }
            <AddTodo setStatusMessage={setStatusMessage} token={token} userId={userId} />
        </div>
    )
}

export default Todos;