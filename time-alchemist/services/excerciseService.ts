import { Excercise, ExcerciseDelete, ExcerciseInput, ExcerciseUpdateInput } from "@/types";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const getAllExcercises = async ({ token }: { token: string }): Promise<Excercise[]> => {
    try {
        const response = await fetch(baseURL + "excercises", {
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

const getExcerciseById = async ({ id, token }: ExcerciseDelete): Promise<Excercise> => {
    try {
        const response = await fetch(baseURL + `excercises/${id}`, {
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

const createExcercise = async ({ token, ...excerciseInput }: ExcerciseInput): Promise<Excercise> => {
    try {
        const response = await fetch(baseURL + "excercises/createexcercise", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(excerciseInput),
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

const updateExcercise = async ({ token, ...excerciseInput }: ExcerciseUpdateInput): Promise<Excercise> => {
    try {
        const response = await fetch(baseURL + "excercises/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(excerciseInput),
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

const deleteExcercise = async ({ id, token }: ExcerciseDelete): Promise<Excercise> => {
    try {
        const response = await fetch(baseURL + `excercises/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ id }),
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

export {
    getAllExcercises,
    getExcerciseById,
    createExcercise,
    updateExcercise,
    deleteExcercise,
}