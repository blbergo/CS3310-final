import { isDigit } from "./utils";

/**
 * Function to check if the expression is a point float
 *
 * @param {String} expression - The expression to evaluate
 * @param {number} pos - The position to start the evaluation
 * @returns {boolean}
 */
export const isExponentFloat = (
  expression: String,
  pos: number,
  state: boolean,
): boolean => {
  while (pos < expression.length && isDigit(expression.charAt(pos))) {
    pos++;
  }

  if (pos < expression.length && expression.charAt(pos) === ".") {
    if (
      (pos + 1 < expression.length &&
        (expression.charAt(pos + 1) === "_" ||
          expression.charAt(pos + 1) === ".")) ||
      state
    ) {
      return false;
    }

    pos++;
    while (pos < expression.length - 1) {
      if (!isDigit(expression.charAt(pos))) {
        if (expression.charAt(pos) === "_") {
          return isExponentFloat(expression, pos + 1, state);
        } else if (expression.charAt(pos) === "e" && !state) {
          return isExponentFloat(expression, pos + 1, true);
        }
      }
      pos++;
    }
  } else if (expression.charAt(pos) === "_") {
    // This is how we handle star
    return isExponentFloat(expression, pos + 1, state);
  } else if (expression.charAt(pos) === "e" && !state) {
    return isExponentFloat(expression, pos + 1, true);
  }

  return state;
};
