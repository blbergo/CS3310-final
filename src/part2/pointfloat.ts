import { isDigit } from "./utils";

/**
 * Function to check if the expression is a point float
 *
 * @param {String} expression - The expression to evaluate
 * @param {number} pos - The position to start the evaluation
 * @returns
 */
export const isPointFloat = (expression: String, pos: number): boolean => {
  let state = false;

  while (pos < expression.length && isDigit(expression.charAt(pos))) {
    pos++;
  }

  if (pos < expression.length && expression.charAt(pos) === ".") {
    state = true;
    pos++;
    while (pos < expression.length) {
      if (!isDigit(expression.charAt(pos))) {
        return false;
      }
      pos++;
    }
  } else if (expression.charAt(pos) === "_") {
    // This is how we handle star
    return isPointFloat(expression, pos + 1);
  }

  return state;
};
