import { Task } from "./task";

export interface List {
    id: number;
    boardID: number;
    name: string;
    tasks: Task[];
}