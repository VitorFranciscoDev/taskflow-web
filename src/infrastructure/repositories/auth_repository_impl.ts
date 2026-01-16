import {UserCredentials} from "@/domain/entities/user";
import {AuthRepository} from "@/domain/repositories/auth_repository";
import {baseURL} from '@/main';

export class AuthRepositoryImpl implements AuthRepository {

    async login(credentials: UserCredentials): Promise<void> {
        const response = await fetch(`${baseURL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            })
        });

        console.log(response.status);

        if (!response.ok) {
            throw new Error("API Error.");
        }

        const data = await response.json();

        localStorage.setItem('auth_token', data.token);
    }

    async register(credentials: UserCredentials): Promise<void> {
        const response = await fetch(`${baseURL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
            })
        });

        if (!response.ok) {
            throw new Error("API Error.");
        }
    }
}