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
                {todos.length > 0 ? (
                    <ul>
                        <li className="flex pb-1 justify-between border-b-2 border-[#cccccc65]">
                            <h3 className="w-[20%]">Name</h3>
                            <p className="w-[50%]">Description</p>
                        </li>
                        {todos.map((todo: Todo) => (
                            <li className="flex justify-between" key={todo.id}>
                                <h3 className="w-[20%]">{todo.name}</h3>
                                <p className="w-[50%]">{todo.description}</p>
                            </li>
                    ))}
                    </ul>
                    ) : (
                        <p className="text-center">
                            No todos yet
                        </p>
                )}
        </div>
    )
}

export default HomeTodos;