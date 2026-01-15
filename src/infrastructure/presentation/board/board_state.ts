import { Board } from "@/domain/entities/board";
import { Task } from "@/domain/entities/task";
import { TaskList } from "@/domain/entities/task_list";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBoardStore = defineStore('board', () => {
    const boards = ref<Board[]>([]);
    const taskLists = ref<TaskList[]>([]);
    const tasks = ref<Task[]>([]);
    const isLoading = ref<boolean>(false);
    const error = ref('');
});