/**
 * Required External Modules and Interfaces
 */
 import express, { Request, Response } from "express";
 import * as ProjectService from "./project.service";
 import { Project } from "./project.interface";
/**
 * Router Definition
 */
 export const projectsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET projects
projectsRouter.get("/", async (req: Request, res: Response) => {
    try {
      const projects: Project[] = await ProjectService.findAll();
  
      res.status(200).send(projects);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });

// GET projects/:id
projectsRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const project: Project = await ProjectService.find(id);
  
      if (project) {
        return res.status(200).send(project);
      }
  
      res.status(404).send("item not found");
    } catch (e) {
      res.status(500).send(e.message);
    }
  });

// POST projects
projectsRouter.post("/", async (req: Request, res: Response) => {
    try {
      const project: Project = req.body;
  
      const newProject = await ProjectService.create(project);
  
      res.status(201).json(newProject);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });

// PUT projects/:id
projectsRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const projectUpdate: Project = req.body;
  
      const existingProject: Project = await ProjectService.find(id);
  
      if (existingProject) {
        const updatedProject = await ProjectService.update(id, projectUpdate);
        return res.status(200).json(updatedProject);
      }
  
      const newProject = await ProjectService.create(projectUpdate);
  
      res.status(201).json(newProject);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });

// DELETE projects/:id
projectsRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      await ProjectService.remove(id);
  
      res.sendStatus(204);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });