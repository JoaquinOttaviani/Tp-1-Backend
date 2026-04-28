import { connectDB } from "./config.js"; 
import { getUsers } from "./controllers.js";

const args = process.argv.slice(2);
const operacion = args[0];

if (!operacion) {
  console.log("Tenes que pasar una operacion");
  process.exit();
}

const run = async () => {
  switch (operacion) {
    case "get":await getUsers();
      break;

    default:
      console.log("Operacion invalida");
  }
};

run();