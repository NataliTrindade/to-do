import express from "express";
import {getAll, newTask, deleteTasks} from "./controllers/tasksController";
import validateBody from "./middlewares/tasksMiddlewares";

const router = express.Router();

router.get("/tasks", getAll);
router.post("/tasks", validateBody, newTask);
router.delete("/tasks/:id", deleteTasks);

export { router };
