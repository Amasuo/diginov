/**
 * Data Model Interfaces
 */
 import { Task } from "./task.interface";
 import { User } from "../user/user.class";
 import { Tasks } from "./tasks.interface";
 import * as UserService from "../user/user.service"
 
 /**
  * In-Memory Store
  */
 
 let tasks: Tasks = {
     1: {
         id: 1,
         title: "Project1",
         description: "descriptionProject1",
         creator: UserService.users[1],
         assigned_to: new User('User2'),
         status: "New",
         created_at : new Date('01/01/2001'),
         completed_at : new Date('01/01/2002'),
     },
 }
 
 /**
  * Service Methods
  */
 
  export const findAll = async (): Promise<Task[]> => Object.values(tasks);
 
  export const find = async (id: number): Promise<Task> => tasks[id];
 
  export const create = async (newTask: Task): Promise<Task> => {
     const id = new Date().valueOf();
   
     tasks[id] = {
       id,
       ...newTask,
     };
   
     return tasks[id];
   };
 
   export const update = async (
     id: number,
     taskUpdate: Task
   ): Promise<Task | null> => {
     const task = await find(id);
   
     if (!task) {
       return null;
     }
   
     tasks[id] = { id, ...taskUpdate };
   
     return tasks[id];
   };
 
   export const remove = async (id: number): Promise<null | void> => {
     const task = await find(id);
   
     if (!task) {
       return null;
     }
   
     delete tasks[id];
   };