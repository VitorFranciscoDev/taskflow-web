import {User} from "../entities/user";
import {AuthRepository} from "../repositories/auth_repository";

export class AuthUseCases {
    constructor(
        private authRepository: AuthRepository,
    ) {}

    // Login
    async login(email: string, password: string): Promise<User> {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error("Invalid Email");
        }

        if (password.length < 8) {
            throw new Error("Invalid Password");
        }

        return await this.authRepository.login(email, password);
    }

    // Add User
    async addUser(user: User): Promise<void> {
        if (user.name.length < 3) {
            throw new Error("Invalid Name");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user.email)) {
            throw new Error("Invalid Email");
        }

        if (user.password.length < 8) {
            throw new Error("Invalid Password;")
        }

        await this.authRepository.addUser(user);
    }
}