import * as readline from "node:readline";
import { integerLiterals } from "./integer";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter an expression to evaluate:\n", (expression) => {
  console.log(
    integerLiterals(expression)
      ? `${expression} is a valid integer`
      : `${expression} is not a valid integer`,
  );
  rl.close();
});
