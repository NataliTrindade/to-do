import connection from "./connection";

const getAll = async () => {
  const tasks = await connection.execute("SELECT * FROM taks");
  return tasks;
};

export default getAll;
