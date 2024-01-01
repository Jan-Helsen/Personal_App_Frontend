import { Event, EventDelete, EventInput, EventUpdateInput } from "@/types";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const getEventsByUserIdAndTimeWindow = async ({ userId, startDate, endDate, token }: { userId: number; startDate: string; endDate: string; token: string }): Promise<Event[]> => {
    try {
        const response = await fetch(baseURL + `event/getEventsByUserIdAndTimeWindow`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userId, firstDay: startDate, lastDay: endDate }),
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

const createEvent = async ({ title, description, startDate, endDate, color, subject, token }: EventInput): Promise<Event> => {
    try {
        const response = await fetch(baseURL + "event/createEvent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ title, description, startDate, endDate, color, subject }),
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

const updateEvent = async ({ id, title, description, startDate, endDate, color, subject, token }: EventUpdateInput): Promise<Event> => {
    try {
        const response = await fetch(baseURL + `event/updateEvent`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ id, title, description, startDate, endDate, color, subject }),
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

const deleteEvent = async ({ id, token }: EventDelete): Promise<Event> => {
    try {
        const response = await fetch(baseURL + `event/deleteEvent`, {
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

export { getEventsByUserIdAndTimeWindow, createEvent, updateEvent, deleteEvent };