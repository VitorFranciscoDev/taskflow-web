import { User } from "../entities/user";
import { AuthRepository } from "../repositories/auth_repository";

export class AuthUseCases {
    constructor(
        private authRepository: AuthRepository,
    ) {}

    async getUserByID(id: number): Promise<User> {
        if(id <= 0) {
            throw new Error("Invalid ID")
        }

        return await this.authRepository.getUserByID(id)
    }

    async getUserByUUID(uuid: string): Promise<User> {
        if(uuid === "") {
            throw new Error("Invalid UUID")
        }

        return await this.authRepository.getUserByUUID(uuid)
    }

    async addUser(user: User): Promise<void> {
        if(user.name.length < 3) {
            throw new Error("Invalid Name")
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(user.email)) {
            throw new Error("Invalid Email")
        }

        if(user.password.length < 8) {
            throw new Error("Invalid Password")
        }

        await this.authRepository.addUser(user)
    }

    async deleteUser(uuid: string): Promise<void> {
        if(uuid === "") {
            throw new Error("Invalid UUID")
        }

        await this.authRepository.deleteUser(uuid)
    }
}