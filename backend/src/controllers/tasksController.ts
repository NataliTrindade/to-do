import { Request, Response } from "express";
import { getAllTasks, createNewTask } from "../models/Tasks";

const getAll = async (_request: Request, response: Response): Promise<void> => {
  const tasks = await getAllTasks();
  response.status(200).json(tasks);
};

const newTask = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const newTaskCreated = await createNewTask(request.body);
  return response.status(201).json(newTaskCreated);
};

export { getAll, newTask };
