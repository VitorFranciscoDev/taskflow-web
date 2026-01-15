import { Task } from "../entities/task";

export interface TaskRepository {
    addTask(task: Task): Promise<void>;
    deleteTask(id: number): Promise<void>;
    updateTask(task: Task): Promise<void>;
}