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
    // Tratar erro de inserção, se necessário
    throw new Error("Falha ao inserir a tarefa.");
  }
};

export { getAllTasks, createNewTask };
