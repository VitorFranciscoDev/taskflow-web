import { TaskList } from "../entities/task_list";

export interface TaskListRepository {
    addTaskList(taskList: TaskList): Promise<void>;
    deleteTaskList(id: number): Promise<void>;
    updateTaskList(taskList: TaskList): Promise<void>;
}