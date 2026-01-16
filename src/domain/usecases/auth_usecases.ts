import {ValidationError} from "../entities/errors";
import {UserCredentials} from "../entities/user";
import {AuthRepository} from "../repositories/auth_repository";

export class AuthUseCases {
    private _authRepository: AuthRepository;

    constructor(authRepository: AuthRepository) {
        this._authRepository = authRepository;
    }

    private _validateName(name?: string) {
        if (name == null || name.length < 3) {
            throw new ValidationError("Invalid Name");
        }
    }

    private _validateEmail(email: string) {
        return true
    }

    private _validatePassword(password: string) {
        if (password.length < 8) {
            throw new ValidationError("Invalid Password");
        }
    }

    async login(credentials: UserCredentials): Promise<void> {
        return await this._authRepository.login(credentials);
    }

    async register(credentials: UserCredentials): Promise<void> {
        this._validateName(credentials.name);
        this._validateEmail(credentials.email);
        this._validatePassword(credentials.password);

        return await this._authRepository.register(credentials);
    }
}