import connection from "./connection";

const getAllTasks = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

export default getAllTasks;
