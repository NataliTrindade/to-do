import { Request, Response } from "express";

const getAll = (request: Request, response: Response): void => {
  response.status(200).json({ message: "Ccontroller getAll funcionando." });
};

export default getAll;
