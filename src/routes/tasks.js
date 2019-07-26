import { Router } from "express";
const router = Router();

import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
  getOneTask,
  getTasksByProject
} from "../controllers/task.controller";

//      /api/tasks/
router.get("/", getTasks);
router.post("/", createTask);

//      /api/tasks/:id
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);
router.get("/:id", getOneTask);

//  /api/tasks/project/:projectid
router.get("/project/:projectid", getTasksByProject);

export default router;
