import { TaskList } from "@/domain/entities/task_list";
import { TaskListRepository } from "@/domain/repositories/task_list_repository";
import { baseURL } from "@/main";

class TaskListRepositoryImpl implements TaskListRepository {

    async addTaskList(taskList: TaskList): Promise<void> {
            const response = await fetch(`${baseURL}/tasklist/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: taskList.name }),
            });
    
            if(!response.ok) {
                throw new Error("API Error.");
            }
        }
    
        async deleteTaskList(id: number): Promise<void> {
            const response = await fetch(`${baseURL}/tasklist/delete`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
    
            if(!response.ok) {
                throw new Error("API Error.");
            }
        }
    
        async updateTaskList(taskList: TaskList): Promise<void> {
            const response = await fetch(`${baseURL}/tasklist/update`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: taskList.name }),
            });
    
            if(!response.ok) {
                throw new Error("API Error.");
            }
        }
    
}