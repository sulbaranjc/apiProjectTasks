import { Router } from "express";
const router = Router();

import {
  createProject,
  getProjects,
  getOneProject,
  deleteOneProject,
  updateProject
} from "../controllers/project.controller";

//      /api/projects/
router.post("/", createProject);
router.get("/", getProjects);

//      /api/projects/:projectID
router.get("/:id", getOneProject);
router.delete("/:id", deleteOneProject);
router.put("/:id", updateProject);

export default router;
