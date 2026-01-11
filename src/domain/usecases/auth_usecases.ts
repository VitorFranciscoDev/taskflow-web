import { ValidationError } from "../entities/errors";
import {User} from "../entities/user";
import {AuthRepository} from "../repositories/auth_repository";

export class AuthUseCases {
    constructor(
        private authRepository: AuthRepository,
    ) {}

    // Validation
    private validateName(name: string) {
        if (name.length < 3) {
            throw new ValidationError("Invalid Name");
        }
    }

    private validateEmail(email: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new ValidationError("Invalid Email");
        }
    }

    private validatePassword(password: string) {
        if (password.length < 8) {
            throw new ValidationError("Invalid Password");
        }
    }

    // Repository
    async login(email: string, password: string): Promise<void> {
        this.validateEmail(email);
        this.validatePassword(password);

        await this.authRepository.login(email, password);
    }

    async register(user: User): Promise<void> {
        this.validateName(user.name);
        this.validateEmail(user.email);
        this.validatePassword(user.password);

        await this.authRepository.register(user);
    }
}