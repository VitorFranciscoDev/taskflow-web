import {User} from "@/domain/entities/user";
import {AuthUseCases} from "@/domain/usecases/auth_usecases";
import {AuthRepositoryImpl} from "@/infrastructure/repositories/auth_repository_impl";
import {defineStore} from "pinia";
import {ref} from "vue";
import {authUseCases} from "@/infrastructure/infrastructure";

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null);
    const isLoading = ref(false);
    const error = ref<string | null>(null);

    async function login(email: string, password: string) {
        isLoading.value = true;
        error.value = null;

        try {
            await authUseCases.login(email, password);
        } catch (error) {
            throw error;
        } finally {
            isLoading.value = false;
        }
    }

    async function register(newUser: User) {
        isLoading.value = true;
        error.value = null;

        try {
            await authUseCases.register(newUser);
        } catch (error) {
            throw error;
        } finally {
            isLoading.value = false;
        }
    }

    return {
        user,
        isLoading,
        error,
        login,
        register,
    }
});