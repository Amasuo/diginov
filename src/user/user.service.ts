/**
 * Data Model Interfaces
 */
import { User } from "./user.class";
import { Users } from "./users.interface";

/**
  * In-Memory Store
  */
 export let users: Users = {
    1: {
        id: 1,
        name: "User1",
    },
    2: {
        id: 2,
        name: "User2",
    },
}

/**
  * Service Methods
  */
 
 export const findAll = async (): Promise<User[]> => Object.values(users);
 
 export const find = async (id: number): Promise<User> => users[id];