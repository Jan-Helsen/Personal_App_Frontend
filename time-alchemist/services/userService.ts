import { LoginReturn, User, UserDelete, UserEmail, UserInput, UserLogin, UserUpdateInput } from "@/types";

const baseURL = process.env.API_URL || "http://localhost:8000/";

const getAllUsers = async ({ token }: { token: string }): Promise<User[]> => {
    try {
        const response = await fetch(baseURL + "users", {
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

const getUserById = async ({ id, token }: UserDelete): Promise<User> => {
    try {
        const response = await fetch(baseURL + `users/${id}`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
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

const getUserByEmail = async ({ email, token }: UserEmail): Promise<User> => {
    try {
        const response = await fetch(baseURL + "users/getuserbyemail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ email }),
        });
        const data = await response.json();
        if (data.status === "error") throw new Error(data.errorMessage)
        if (data.status === "unauthorized") throw new Error(data.errorMessage)
        return data   
    } 
    catch (error: any) {
        console.log(error);
        throw new Error(error.message);
    }
};

const loginUser = async ( userLogin: UserLogin): Promise<LoginReturn> => {
    try {
        const response = await fetch(baseURL + "users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userLogin),
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

const createUser = async (userInput: UserInput): Promise<User> => {
    try {
        const response = await fetch(baseURL + "users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInput)
        });
        const data = await response.json();
        if (data.status === "error") throw new Error(data.errorMessage)
        return data;   
    } 
    catch (error: any) {
        console.log(error);
        throw new Error(error.message);
    }
};

const updateUser = async ({ token, ...userUpdateInput }: UserUpdateInput): Promise<User> => {
    try {
        const response = await fetch(baseURL + "users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(userUpdateInput)
        })
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
    getAllUsers,
    getUserById,
    getUserByEmail,
    loginUser,
    createUser,
    updateUser,
}