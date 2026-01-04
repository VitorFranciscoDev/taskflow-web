import {User} from "@/domain/entities/user";
import {AuthUseCases} from "@/domain/usecases/auth_usecases";
import {AuthRepositoryImpl} from "@/infrastructure/repositories/auth_repository_impl";
import {defineStore} from "pinia";
import {ref} from "vue";
import {authUseCases} from "@/infrastructure/infrastructure";

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null);

    async function login(email: string, password: string) {
        try {
            const loggedUser = await authUseCases.login(email, password);
            user.value = loggedUser;

            return loggedUser;
        } catch (e) {
            throw e;
        }
    }

    async function addUser(newUser: User) {
        try {
            await authUseCases.addUser(newUser);
        } catch (e) {
            throw e;
        }
    }
});