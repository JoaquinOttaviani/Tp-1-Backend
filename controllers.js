import { connectDB } from "./config.js";
import { v4 as uuidv4 } from "uuid";



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

export const getUsers = async () => {
  const db = await connectDB();

  try {
    const [rows] = await db.execute("SELECT * FROM users");

    rows.forEach(user => {
      console.log(user);
    });

  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (id) => {
  const db = await connectDB();

  try {
    const [result] = await db.execute(
      "DELETE FROM users WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      console.log("Usuario no encontrado");
      return;
    }

    console.log("Usuario eliminado");
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (username, email, password, id) => {
  const db = await connectDB();

  try {
    const [result] = await db.execute(
      "UPDATE users SET username=?, email=?, password=? WHERE id=?",
      [username, email, password, id]
    );

    if (result.affectedRows === 0) {
      console.log("Usuario no encontrado");
      return;
    }

    console.log("Usuario actualizado");
  } catch (error) {
    console.log(error.message);
  }
};