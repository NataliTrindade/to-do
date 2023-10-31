import { Request, Response } from "express";

const validateBody = (
  request: Request,
  response: Response,
  next: () => void
) => {
  const { body } = request;

  if (body.title === undefined) {
    return response
      .status(400)
      .json({ message: "The field 'title' is required" });
  }

  if (body.title === "") {
    return response.status(400).json({ message: "The title cannot be empty" });
  }

  next();
};

const validateStatus = (
  request: Request,
  response: Response,
  next: () => void
) => {
  const { body } = request;

  if (body.status === undefined) {
    return response
      .status(400)
      .json({ message: "The field 'status' is required" });
  }

  if (body.status === "") {
    return response.status(400).json({ message: "The status cannot be empty" });
  }

  next();
};

export {validateBody, validateStatus};
