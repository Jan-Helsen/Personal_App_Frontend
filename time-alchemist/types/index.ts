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
    events: Event[];
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

export type TodoUpdateInput = {
    id: number;
    name: string;
    description: string;
    userId: number;
    token: string;
}

export type TodoDelete = {
    id: number;
    token: string;
}

export type TodoInput = {
    name: string;
    description: string;
    userId: number;
    token: string;
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

export type HabitUpdateInput = {
    id: number;
    name: string;
    description: string;
    streak: number;
    userId: number;
    token: string;
}

export type HabitDelete = {
    id: number;
    token: string;
}

export type HabitInput = {
    name: string;
    description: string;
    streak: number;
    userId: number;
    token: string;
}

export type Deadline = {
    id: number;
    name: string;
    subject: string;
    description: string;
    endDate: string;
    user: User;
    userId: number;
}

export type DeadlineUpdateInput = {
    id: number;
    name: string;
    subject: string;
    description: string;
    endDate: string;
    userId: number;
    token: string;
}

export type DeadlineDelete = {
    id: number;
    token: string;
}

export type DeadlineInput = {
    name: string;
    subject: string;
    description: string;
    endDate: string;
    userId: number;
    token: string;
}

export type Excercise = {
    id: number;
    name: string;
    img: string;
}

export type ExcerciseUpdateInput = {
    id: number;
    name: string;
    img: string;
    token: string;
}

export type ExcerciseDelete = {
    id: number;
    token: string;
}

export type ExcerciseInput = {
    name: string;
    img: string;
    token: string;
}

export type Event = {
    id: number;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    color: string;
    subject: Subject;
}

export type EventDelete = {
    id: number;
    token: string;
}

export type EventInput = {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    color: string;
    subject: Subject;
    token: string;
}

export type EventUpdateInput = {
    id: number;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    color: string;
    subject: Subject;
    token: string;
}

export type Subject = "School" | "Work" | "Sports" | "Other"; 

export type StatusMessage = {
    type: string,
    message: string
}