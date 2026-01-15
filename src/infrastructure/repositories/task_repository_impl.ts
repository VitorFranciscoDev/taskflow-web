import { Task } from "@/domain/entities/task";
import { TaskRepository } from "@/domain/repositories/task_repository";
import { baseURL } from "@/main";

class TaskRepositoryImpl implements TaskRepository {

    async addTask(task: Task): Promise<void> {
            const response = await fetch(`${baseURL}/task/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: task.name, description: task.description, is_done: task.isDone }),
            });
    
            if(!response.ok) {
                throw new Error("API Error.");
            }
        }
    
        async deleteTask(id: number): Promise<void> {
            const response = await fetch(`${baseURL}/task/delete`, {
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
    
        async updateTask(task: Task): Promise<void> {
            const response = await fetch(`${baseURL}/task/update`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: task.name, description: task.description, is_done: task.isDone }),
            });
    
            if(!response.ok) {
                throw new Error("API Error.");
            }
        }
    
}