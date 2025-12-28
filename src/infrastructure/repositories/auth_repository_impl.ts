import {User} from "@/domain/entities/user";
import {AuthRepository} from "@/domain/repositories/auth_repository";

import {baseURL} from '@/main'

export class AuthRepositoryImpl implements AuthRepository {

    async login(email: string, password: string): Promise<User> {
        const response = await fetch(`${baseURL}/login`);

        if (!response.ok) {
            throw new Error("Login Error");
        }

        return response.json();
    }

    async register(user: User): Promise<void> {
        const response = await fetch(`${baseURL}/register`, {
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

        if (!response.ok) {
            throw new Error("Error registering user");
        }
    }
}