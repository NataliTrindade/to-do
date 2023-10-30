import express from "express";
import getAll  from "./controllers/tasksController";

const router = express.Router();

router.get("/tasks", getAll);

export { router };
