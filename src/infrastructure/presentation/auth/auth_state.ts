import {User, UserCredentials} from "@/domain/entities/user";
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

        const credentials: UserCredentials = {email, password};

        try {
            await authUseCases.login(credentials);
        } catch (error) {
            throw error;
        } finally {
            isLoading.value = false;
        }
    }

    async function register(credentials: UserCredentials) {
        isLoading.value = true;
        error.value = null;

        try {
            await authUseCases.register(credentials);
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