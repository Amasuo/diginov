/**
 * Data Model Interfaces
 */
import { Project } from "./project.interface";
import { Projects } from "./projects.interface";
import * as UserService from "../user/user.service"

/**
 * In-Memory Store
 */
let projects: Projects = {
    1: {
        id: 1,
        title: "Project1",
        description: "descriptionProject1",
        admins: [UserService.users[1]],
        users: [UserService.users[2]],
        created_at : new Date('12/04/1997'),
    },
}

/**
 * Service Methods
 */

 export const findAll = async (): Promise<Project[]> => Object.values(projects);

 export const find = async (id: number): Promise<Project> => projects[id];

 export const create = async (newProject: Project): Promise<Project> => {
    const id = new Date().valueOf();
  
    projects[id] = {
      id,
      ...newProject,
    };
  
    return projects[id];
  };

  export const update = async (
    id: number,
    projectUpdate: Project
  ): Promise<Project | null> => {
    const project = await find(id);
  
    if (!project) {
      return null;
    }
  
    projects[id] = { id, ...projectUpdate };
  
    return projects[id];
  };

  export const remove = async (id: number): Promise<null | void> => {
    const project = await find(id);
  
    if (!project) {
      return null;
    }
  
    delete projects[id];
  };