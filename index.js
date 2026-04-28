const args = process.argv.slice(2);
const operacion = args[0];

console.log("Operacion:", operacion);

switch (operacion) {
  case "get":
    console.log("GET OK");
    break;

  case "add":
    console.log("ADD OK");
    break;

  case "delete":
    console.log("DELETE OK");
    break;

  case "update":
    console.log("UPDATE OK");
    break;

  default:
    console.log("Operacion invalida");
}