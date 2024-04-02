import * as readline from "node:readline";
import { isPointFloat } from "./pointfloat";
import { isExponentFloat } from "./exponentfloat";

// Create an interface to read lines from the stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter an expression to evaluate:\n", (expression) => {
  console.log(
    isPointFloat(expression, 0, false) || isExponentFloat(expression, 0, false)
      ? `${expression} is a valid float`
      : `${expression} is not a valid float`,
  );
  rl.close();
});
