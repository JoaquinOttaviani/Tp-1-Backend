import { connectDB } from "./config.js";

export const getUsers = async () => {
  const db = await connectDB();

  try {
    const [rows] = await db.execute("SELECT * FROM users");
    console.table(rows);
  } catch (error) {
    console.log(error.message);
  }
};