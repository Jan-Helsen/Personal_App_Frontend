import { Todo } from '@/types';
import React, { useState } from 'react';

type Props = {
    todoz: Todo[];
}

const HomeTodos: React.FC<Props> = (props: Props) => {
    const [todos, setTodos] = useState<Todo[]>(props.todoz);

    return (
        <div className="col-start-1 row-start-3 bg-gradient-to-b from-[#178cc6] to-[#005e59]  bg-opacity-90 rounded-3xl w-11/12 h-5/6 p-4">
            <h2 className="text-2xl pb-2 text-center font-bold text-white">Todos</h2>
            <ul>
                {todos.length > 0 && todos.map((todo: Todo) => (
                    <li className="flex justify-between" key={todo.id}>
                        <h3>{todo.name}</h3>
                        <p>{todo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomeTodos;