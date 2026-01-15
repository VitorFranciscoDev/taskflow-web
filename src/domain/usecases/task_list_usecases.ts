import { TaskList } from "../entities/task_list";
import { TaskListRepository } from "../repositories/task_list_repository";

export class TaskListUseCases {
    /// Constructor
    constructor(
        private _taskListRepository: TaskListRepository,
    ) {}

    /// Repository
    async addTaskList(taskList: TaskList): Promise<void> {
        return await this._taskListRepository.addTaskList(taskList);
    }

    async deleteTaskList(id: number): Promise<void> {
        return await this._taskListRepository.deleteTaskList(id);
    }

    async updateTaskList(taskList: TaskList): Promise<void> {
        return await this._taskListRepository.updateTaskList(taskList);
    }
}