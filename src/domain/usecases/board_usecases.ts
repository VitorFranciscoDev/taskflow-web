import { Board } from "../entities/board";
import { BoardRepository } from "../repositories/board_repository";

export class BoardUseCases {
    /// Constructor
    constructor(
        private _boardRepository: BoardRepository,
    ) {}

    /// Repository
    async addBoard(board: Board): Promise<void> {
        return await this._boardRepository.addBoard(board);
    }

    async deleteBoard(id: number): Promise<void> {
        return await this._boardRepository.deleteBoard(id);
    }

    async updateBoard(board: Board): Promise<void> {
        return await this._boardRepository.updateBoard(board);
    }

    async getAllBoards(userID: number): Promise<Board[]> {
        return await this._boardRepository.getAllBoards(userID);
    }
}