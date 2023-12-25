import { Deadline, DeadlineInput, DeadlineDelete, DeadlineUpdateInput } from "@/types";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const getAllDeadlines = async ({ token }: { token: string }): Promise<Deadline[]> => {
    try {
        const response = await fetch(baseURL + "deadlines", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        }); 
        const data = await response.json();
        if (data.status === "error") throw new Error(data.errorMessage);
        if (data.status === "unauthorized") throw new Error(data.errorMessage);
        return data;   
    } 
    catch (error: any) {
        console.log(error);
        throw new Error(error.message);
    }
};

const getDeadlineById = async ({ id, token }: DeadlineDelete): Promise<Deadline> => {
    try {
        const response = await fetch(baseURL + `deadlines/${id}`, {
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
    } 
    catch (error: any) {
        console.log(error);
        throw new Error(error.message);
    }
}

const createDeadline = async ({ name, subject, description, endDate, userId, token }: DeadlineInput): Promise<Deadline> => {
    try {
        const response = await fetch(baseURL + "deadlines/createdeadline", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ name, subject, description, endDate, userId }),
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

const updateDeadline = async ({ token, ...deadlineUpdateInput }: DeadlineUpdateInput): Promise<Deadline> => {
    try {
        const response = await fetch(baseURL + `deadlines/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(deadlineUpdateInput),
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

const deleteDeadline = async ({ id, token }: DeadlineDelete): Promise<Deadline> => {
    try {
        const response = await fetch(baseURL + `deadlines/`, {
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
        return data   
    } 
    catch (error: any) {
        console.log(error);
        throw new Error(error.message);
    }
}

export {
    getAllDeadlines,
    getDeadlineById,
    createDeadline,
    updateDeadline,
    deleteDeadline,
}