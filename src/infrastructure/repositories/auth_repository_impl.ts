import { User } from "@/domain/entities/user";
import { AuthRepository } from "@/domain/repositories/auth_repository";
import { json } from "stream/consumers";

export class AuthRepositoryImpl implements AuthRepository {
    constructor(
        private baseURL = "https://aaaaaaa/auth/"
    ) {}

    async login(email: string, password: string): Promise<User> {
        const response = await fetch(`${this.baseURL}login`);

        if(!response.ok) {
            throw new Error("Login Error");
        }

        return response.json();
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
}