export class User {
    /// Constructor
    constructor(
        private _id: number,
        private _name: string,
        private _email: string,
        private _password: string,
    ) {}

    /// Getters
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }
}