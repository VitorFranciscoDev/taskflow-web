import { Task } from "../entities/task";
import { TaskRepository } from "../repositories/task_repository";

export class TaskUseCases {
    /// Constructor
    constructor(
        private _taskRepository: TaskRepository,
    ) {}

    /// Repository
    async addTask(task: Task): Promise<void> {
        return await this._taskRepository.addTask(task);
    }

    async deleteTask(id: number): Promise<void> {
        return await this._taskRepository.deleteTask(id);
    }

    async updateTask(task: Task): Promise<void> {
        return await this._taskRepository.updateTask(task);
    }
}