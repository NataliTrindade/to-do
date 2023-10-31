import express from "express";
import {
  getAll,
  newTask,
  deleteTasks,
  updatedTask,
} from "./controllers/tasksController";
import { validateBody, validateStatus } from "./middlewares/tasksMiddlewares";

const router = express.Router();

router.get("/tasks", getAll);
router.post("/tasks", validateBody, newTask);
router.delete("/tasks/:id", deleteTasks);
router.put("/tasks/:id", validateBody , validateStatus, updatedTask);

export { router };
