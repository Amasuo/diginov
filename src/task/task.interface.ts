import { User } from "../user/user.class";

export interface Task {
    id: number;
    title: string;
    description: string;
    creator: User;
    assigned_to: User;
    status: string;
    created_at : Date;
    completed_at: Date;
}