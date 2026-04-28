import mysql from "mysql2/promise";

export const connectDB = async () => {
  try {
      const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "users_db"
    });

    console.log("Conectado a MySQL");
    return db;

  } catch (error) {
    console.log(error.message);
  }
};