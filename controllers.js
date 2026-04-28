import { connectDB } from "./config.js";
import { v4 as uuidv4 } from "uuid";

export const getUsers = async () => {
  const db = await connectDB();

  try {
    const [rows] = await db.execute("SELECT * FROM users");
    console.table(rows);
  } catch (error) {
    console.log(error.message);
  }
};

export const addUser = async (username, email, password) => {
  const db = await connectDB();

  try {
    if (!username || !email || !password) {
      console.log("Faltan datos");
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      console.log("Email invalido");
      return;
    }

    const id = uuidv4();

    await db.execute(
      "INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)",
      [id, username, email, password]
    );

    console.log("Usuario creado");
  } catch (error) {
    console.log(error.message);
  }
};