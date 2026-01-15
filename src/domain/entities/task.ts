export class Task {
    /// Constructor
    constructor(
        private _id: number,
        private _taskListID: number,
        private _name: string,
        private _description: string,
        private _isDone: boolean,
    ) {}

    /// Getters
    get id() {
        return this._id;
    }

    get taskListID() {
        return this._taskListID;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get isDone() {
        return this._isDone;
    }
}