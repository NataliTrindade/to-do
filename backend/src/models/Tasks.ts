import connection from "./connection";

interface Task {
  title: string;
  status: string;
  created_at: Date;
}

const getAllTasks = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

const createNewTask = async (task: Task) => {
  const { title } = task;
  const query =
    "INSERT INTO tasks(title, status, created_at) VALUES (?, 'pendente', CURRENT_TIMESTAMP)";
  const [createdTaks] = await connection.execute(query, [title]);

  if ("affectedRows" in createdTaks && createdTaks.affectedRows === 1) {
    return { id: createdTaks.insertId };
  } else {
    throw new Error("Falha ao inserir a tarefa.");
  }
};

const deleteTask = async (id: number) => {
  const deletedTask = await connection.execute(
    "DELETE FROM tasks WHERE id = ?",
    [id]
  );
  return deletedTask;
};

const updateTask = async (id: number, task: Task) => {
  const { title, status } = task;
  const query = "UPDATE tasks SET title = ?, status = ? WHERE id = ?";
  const updatedTask = await connection.execute(query, [title, status, id]);
  return updatedTask;
};

export { getAllTasks, createNewTask, deleteTask, updateTask };
