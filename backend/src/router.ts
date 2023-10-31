import express from "express";
import {getAll, newTask} from "./controllers/tasksController";
import validateBody from "./middlewares/tasksMiddlewares";

const router = express.Router();

router.get("/tasks", getAll);
router.post("/tasks", validateBody, newTask);

export { router };
