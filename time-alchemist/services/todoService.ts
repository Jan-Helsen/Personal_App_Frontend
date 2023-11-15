import { Todo, TodoInput, TodoUpdateInput, TodoDelete } from '@/types';

const baseURL = process.env.API_URL || "http://localhost:8000/";

const getAllTodos = async ({ token }: { token: string }): Promise<Todo[]> => {
    try {
        const response = await fetch(baseURL + "todos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        });
        const data = await response.json();
        if (data.status === "error") throw new Error(data.errorMessage)
        if (data.status === "unauthorized") throw new Error(data.errorMessage)
        return data;   
    } 
    catch (error: any) {
        console.log(error);
        throw new Error(error.message);
    }
};

const getTodoById = async ({ id, token }: TodoDelete): Promise<Todo> => {
    try {
        const response = await fetch(baseURL + `todos/${id}`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        });
        const data = await response.json();
        if (data.status === "error") throw new Error(data.errorMessage);
        if (data.status === "unauthorized") throw new Error(data.errorMessage);
        return data;
    } catch (error: any) {
        console.log(error);
        throw new Error(error.message);
    }
};

const createTodo = async ({ token, ...todoInput }: TodoInput): Promise<Todo> => {
    try {
        const response = await fetch(baseURL + "todos/createtodo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(todoInput),
        });
        const data = await response.json();
        if (data.status === "error") throw new Error(data.errorMessage);
        if (data.status === "unauthorized") throw new Error(data.errorMessage);
        return data   
    } 
    catch (error: any) {
        console.log(error);
        throw new Error(error.message);
    }
};

const updateTodo = async ({ token, ...todoInput }: TodoUpdateInput): Promise<Todo> => {
    try {
        const response = await fetch(baseURL + "todos/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(todoInput),
        });
        const data = await response.json();
        if (data.status === "error") throw new Error(data.errorMessage);
        if (data.status === "unauthorized") throw new Error(data.errorMessage);
        return data   
    } 
    catch (error: any) {
        console.log(error);
        throw new Error(error.message);
    }
};

const deleteTodo = async ({ id, token }: TodoDelete): Promise<Todo> => {
    try {
        const response = await fetch(baseURL + `todos/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ id }),
        });
        const data = await response.json();
        if (data.status === "error") throw new Error(data.errorMessage);
        if (data.status === "unauthorized") throw new Error(data.errorMessage);
        return data;
    } catch (error: any) {
        console.log(error);
        throw new Error(error.message);
    }
};

export {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
}