import {AuthRepositoryImpl} from "@/infrastructure/repositories/auth_repository_impl";
import {AuthUseCases} from "@/domain/usecases/auth_usecases";

export const authRepository = new AuthRepositoryImpl();
export const authUseCases = new AuthUseCases(authRepository);