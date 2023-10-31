import express from "express";
import {getAll, newTask} from "./controllers/tasksController";

const router = express.Router();

router.get("/tasks", getAll);
router.post("/tasks", newTask);

export { router };
