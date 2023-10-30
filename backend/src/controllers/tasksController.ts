import { Request, Response } from "express";
import getAllTasks from "../models/Tasks";

const getAll = async (request: Request, response: Response): Promise<void> => {
  const tasks = await getAllTasks();
  response.status(200).json(tasks);
};

export default getAll;
