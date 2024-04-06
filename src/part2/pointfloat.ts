import { isDigit } from "./utils";

/**
 * Function to check if the expression is a point float
 *
 * @param {String} expression - The expression to evaluate
 * @param {number} pos - The position to start the evaluation
 * @returns {boolean} true if the expression is a point float, false otherwise
 */
export const isPointFloat = (
  expression: String,
  pos: number,
  state: boolean,
): boolean => {
  const inBounds = pos < expression.length;
  const isSeparator = expression.charAt(pos) === "_";

  while (inBounds && isDigit(expression.charAt(pos))) {
    pos++;
  }

  const isDecimal = pos < expression.length && expression.charAt(pos) === ".";
  if (isDecimal) {
    const hasInvalidChar =
      pos + 1 < expression.length &&
      (expression.charAt(pos + 1) === "_" ||
        expression.charAt(pos + 1) === ".");

    if (hasInvalidChar) {
      return false;
    }

    state = true;
    pos++;
    while (pos < expression.length) {
      if (!isDigit(expression.charAt(pos))) {
        const isValidSeparator =
          pos < expression.length - 1 && expression.charAt(pos) === "_";
        if (isValidSeparator) {
          return isPointFloat(expression, pos + 1, state);
        } else {
          return false;
        }
      }
      pos++;
    }
  } else if (isSeparator) {
    // This is how we handle star
    return isPointFloat(expression, pos + 1, state);
  }

  return state;
};
