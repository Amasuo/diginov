import {User} from "../user/user.class"

export interface Project {
    id: number;
    title: string;
    description: string;
    admins: Array<User>;
    users: Array<User>;
    created_at : Date;
}