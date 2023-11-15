import { Habit, HabitDelete, HabitInput, HabitUpdateInput } from "@/types";

const baseURL = process.env.API_URL || "http://localhost:8000/";

const getAllHabits = async ({ token }: { token: string }): Promise<Habit[]> => {
    try {
        const response = await fetch(baseURL + "habits", {
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

const getHabitById = async ({ id, token }: HabitDelete): Promise<Habit> => {
    try {
        const response = await fetch(baseURL + `habits/${id}`, {
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
}

const createHabit = async ({ token, ...habitInput }: HabitInput): Promise<Habit> => {
    try {
        const response = await fetch(baseURL + "habits/createhabit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(habitInput),
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
}

const updateHabit = async ({ token, ...habitUpdateInput }: HabitUpdateInput): Promise<Habit> => {
    try {
        const response = await fetch(baseURL + "habits/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(habitUpdateInput),
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

const deleteHabit = async ({ id, token }: HabitDelete): Promise<Habit> => {
    try {
        const response = await fetch(baseURL + `habits/`, {
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
    getAllHabits, 
    getHabitById, 
    createHabit, 
    updateHabit, 
    deleteHabit 
};