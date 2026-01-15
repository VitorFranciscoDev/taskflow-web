import { Board } from "@/domain/entities/board";
import { BoardRepository } from "@/domain/repositories/board_repository";
import { baseURL } from "@/main";

export class BoardRepositoryImpl implements BoardRepository {

    async addBoard(board: Board): Promise<void> {
        const response = await fetch(`${baseURL}/board/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: board.name }),
        });

        if(!response.ok) {
            throw new Error("API Error.");
        }
    }

    async deleteBoard(id: number): Promise<void> {
        const response = await fetch(`${baseURL}/board/delete`, {
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

    async updateBoard(board: Board): Promise<void> {
        const response = await fetch(`${baseURL}/board/update`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: board.name }),
        });

        if(!response.ok) {
            throw new Error("API Error.");
        }
    }

    async getAllBoards(): Promise<Board[]> {
        const response = await fetch(`${baseURL}/board`);

        if(!response.ok) {
            throw new Error("API Error.");
        }

        return response.json();
    }
    
}