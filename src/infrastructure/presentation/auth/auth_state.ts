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

    function setLoading(loading: boolean) {
        isLoading.value = loading;
    }

    async function login(email: string, password: string) {
        setLoading(true);

        try {
            const loggedUser = await authUseCases.login(email, password);
            user.value = loggedUser;

            return loggedUser;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }

    async function register(newUser: User) {
        setLoading(true);

        try {
            await authUseCases.register(newUser);
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }
});