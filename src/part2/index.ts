import * as readline from "node:readline";
import { isPointFloat } from "./pointfloat";

// Create an interface to read lines from the stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter an expression to evaluate:\n", (expression) => {
  console.log(
    isPointFloat(expression, 0)
      ? "It is a point float"
      : "It is not a point float",
  );
  rl.close();
});
