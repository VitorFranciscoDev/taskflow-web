import {TaskList} from "./task_list"

export interface Board {
    name: string;
    taskLists: TaskList[];
}