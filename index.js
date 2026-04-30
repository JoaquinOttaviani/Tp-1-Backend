import { getUsers, addUser, deleteUser, updateUser } from "./controllers.js";
const args = process.argv.slice(2);
const id = args[1];
const operacion = args[0];

if (!operacion) {
  console.log("Tenes que pasar una operacion");
  process.exit();
}

const username = args[1];
const email = args[2];
const password = args[3];

const run = async () => {
  switch (operacion) {
    case "get":
      await getUsers();
      break;

    case "add":
      await addUser(username, email, password);
      break;
    
      case "delete":
      await deleteUser(id);
      break;
    
      case "update":
      await updateUser(username, email, password, args[4]);
      break;

    default:
      console.log("Operacion invalida");
  }
};

run(); 