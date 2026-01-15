import { ValidationError } from "../entities/errors";
import {User} from "../entities/user";
import {AuthRepository} from "../repositories/auth_repository";

export class AuthUseCases {
    /// Constructor
    constructor(
        private _authRepository: AuthRepository,
    ) {}

    /// Validation
    private _validateName(name: string) {
        if (name.length < 3) {
            throw new ValidationError("Invalid Name");
        }
    }

    private _validateEmail(email: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new ValidationError("Invalid Email");
        }
    }

    private _validatePassword(password: string) {
        if (password.length < 8) {
            throw new ValidationError("Invalid Password");
        }
    }

    /// Repository
    async login(email: string, password: string): Promise<void> {
        this._validateEmail(email);
        this._validatePassword(password);

        return await this._authRepository.login(email, password);
    }

    async register(user: User): Promise<void> {
        this._validateName(user.name);
        this._validateEmail(user.email);
        this._validatePassword(user.password);

        return await this._authRepository.register(user);
    }
}