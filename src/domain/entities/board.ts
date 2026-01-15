import { TaskList } from "./task_list"

export class Board {
    /// Constructor
    constructor(
        private _id: number,
        private _userID: number,
        private _name: string,
        private _taskLists: TaskList[],
    ) {}

    /// Getters
    get id() {
        return this._id;
    }

    get userID() {
        return this._userID;
    }

    get name() {
        return this._name;
    }

    get taskLists() {
        return this._taskLists;
    }
}