import { Todo } from "@/types";

type Props = {
    todos: Todo[];
}

const TodosOverview: React.FC<Props> = (props: Props) => {

    const { todos } = props;

    return (
        <div className="w-1/2 p-12">
            <ul className="w-5/6 h-3/4 m-auto p-4 rounded-lg bg-gradient-to-b from-[#178cc6] to-[#005e59]">
                {todos.map((todo: Todo) => (
                    <li className="flex justify-between" key={todo.id}>
                        <h3>{todo.name}</h3>
                        <p>{todo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodosOverview;