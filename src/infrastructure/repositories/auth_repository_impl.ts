import { User } from "@/domain/entities/user";
import { AuthRepository } from "@/domain/repositories/auth_repository";
import { json } from "stream/consumers";

export class AuthRepositoryImpl implements AuthRepository {
    constructor(
        private baseURL = "https://aaaaaaa/auth/"
    ) {}

    async getUserByID(id: number): Promise<User> {
        const response = await fetch(`${this.baseURL}${id}`);

        if(!response.ok) {
            throw new Error("User not found");
        }

        return await response.json();
    }

    async getUserByUUID(uuid: string): Promise<User> {
        const response = await fetch(`${this.baseURL}${uuid}`);

        if(!response.ok) {
            throw new Error("User not found");
        }

        return await response.json();
    }

    async addUser(user: User): Promise<void> {
        const response = await fetch(`${this.baseURL}register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: user.name,
                email: user.email,
                password: user.password,
            })
        });

        if(!response.ok) {
            throw new Error("Error creating user");
        }
    }

    async deleteUser(uuid: string): Promise<void> {
        const response = await fetch(`${this.baseURL}auth/${uuid}`, {
            method: "DELETE",
        });

        if(!response.ok) {
            throw new Error("Error deleting user");
        }
    }
}