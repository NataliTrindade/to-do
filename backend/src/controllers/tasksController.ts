import { Request, Response } from "express";
import { getAllTasks, createNewTask, deleteTask } from "../models/Tasks";

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

const deleteTasks = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const { id } = request.params;
  const taskId = Number(id);
  
  await deleteTask(taskId);
  return response.status(204).json();
};

export { getAll, newTask, deleteTasks };
