import { Board } from "../entities/board";

export interface BoardRepository {
    addBoard(board: Board): Promise<void>;
    deleteBoard(id: number): Promise<void>;
    updateBoard(board: Board): Promise<void>;
    getAllBoards(userID: number): Promise<Board[]>;
}