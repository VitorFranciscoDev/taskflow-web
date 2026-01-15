import { User } from "@/domain/entities/user";
import { AuthRepository } from "@/domain/repositories/auth_repository";
import { baseURL } from '@/main';

export class AuthRepositoryImpl implements AuthRepository {

    async login(email: string, password: string): Promise<void> {
        const response = await fetch(`${baseURL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        if(!response.ok) {
            throw new Error("API Error.");
        }

        const data = await response.json();

        localStorage.setItem('auth_token', data.token);
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
            throw new Error("API Error.");
        }
    }
}