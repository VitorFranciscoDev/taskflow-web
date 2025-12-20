import { User } from "../entities/user";

export interface AuthRepository {
    getUserByID(id: number): Promise<User>
    getUserByUUID(uuid: string): Promise<User>
    addUser(user: User): Promise<void>
    deleteUser(uuid: string): Promise<void>
}