import {UserCredentials} from "../entities/user";

export interface AuthRepository {
    login(credentials: UserCredentials): Promise<void>;

    register(credentials: UserCredentials): Promise<void>;
}