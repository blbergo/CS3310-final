import * as chalk from "chalk";
import { isExponentFloat } from "../part2/exponentfloat";
import { isPointFloat } from "../part2/pointfloat";

const TEST_FLOATS = {
  "3.14": true,
  "10.": true,
  ".001": true,
  "1e100": true,
  "3.14e-10": true,
  "0e0": true,
  "3.14_15_93": true,
  "1_1e1234.3": false,
  asdf: false,
  "1_": false,
};

console.log("Running tests...");

let count = 0;

for (const [expression, expected] of Object.entries(TEST_FLOATS)) {
  const result =
    isPointFloat(expression, 0, false) || isExponentFloat(expression, 0, false);
  if (result !== expected) {
    console.error(chalk.redBright(`Test failed for expression: ${expression}`));
    count++;
  } else {
    console.log(chalk.greenBright(`Test passed for expression: ${expression}`));
  }
}

console.log(chalk.blueBright(`Tests completed with ${count} failures`));
