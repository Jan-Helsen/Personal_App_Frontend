export type ErrorReturn = {
    status: string;
    errorMessage: string;
}

export type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    todos: Todo[];
    habits: Habit[];
    deadlines: Deadline[];
}

export type UserInput = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    todosIds: number[];
    habitsIds: number[];
    deadlinesIds: number[];
}

export type UserDelete = {
    id: number;
    token: string;
}

export type UserEmail = {
    email: string;
    token: string;
}

export type UserUpdateInput = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    todosIds: number[];
    habitsIds: number[];
    deadlinesIds: number[];
    token: string;
}

export type UserLogin = {
    email: string;
    password: string;
}

export type LoginReturn = {
    message: string;
    token: string;
}

export type FriendsInput = {
    email: string;
    password: string;
}

export type Todo = {
    id: number;
    name: string;
    description: string;
    user: User;
    userId: number;
}

export type Habit = {
    id: number;
    name: string;
    description: string;
    updatedAt: Date;
    streak: number;
    user: User;
    userId: number;
}

export type Deadline = {
    id: number;
    name: string;
    subject: string;
    description: string;
    endDate: Date;
    user: User;
    userId: number;
}

export type Excercise = {
    id: number;
    name: string;
    img: string;
}

export type StatusMessage = {
    type: string,
    message: string
}