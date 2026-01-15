import { Task } from "./task";

export class TaskList {
    /// Constructor
    constructor(
        private _id: number,
        private _boardID: number,
        private _name: string,
        private _tasks: Task[],
    ) {}

    /// Getters
    get id() {
        return this._id;
    }

    get boardID() {
        return this._boardID;
    }

    get name() {
        return this._name;
    }

    get tasks() {
        return this._tasks;
    }
}