import { isDigit } from "./utils";

/**
 * Function to check if the expression is a point float
 *
 * @param {String} expression - The expression to evaluate
 * @param {number} pos - The position to start the evaluation
 * @returns {boolean} true if the expression is a point float, false otherwise
 */
export const isExponentFloat = (
  expression: String,
  pos: number,
  state: boolean,
): boolean => {
  const inBounds = pos < expression.length;
  const isSeparator = expression.charAt(pos) === "_";

  // Check if the expression is a digit
  while (inBounds && isDigit(expression.charAt(pos))) {
    pos++;
  }

  // Check if the expression is a decimal point
  const isDecimal = pos < expression.length && expression.charAt(pos) === ".";
  if (isDecimal) {
    // Cover cases like ._ or .e
    const hasInvalidChar =
      (pos + 1 < expression.length &&
        (expression.charAt(pos + 1) === "_" ||
          expression.charAt(pos + 1) === "." ||
          expression.charAt(pos + 1) === "e" ||
          expression.charAt(pos + 1) === "E")) ||
      state;

    if (hasInvalidChar) {
      return false;
    }

    pos++;

    while (pos < expression.length - 1) {
      if (!isDigit(expression.charAt(pos))) {
        const isSeparator = expression.charAt(pos) === "_";
        const isFirstExponent =
          (expression.charAt(pos) === "e" || expression.charAt(pos) === "E") &&
          !state;

        if (isSeparator) {
          return isExponentFloat(expression, pos + 1, state);
        } else if (isFirstExponent) {
          return isExponentFloat(expression, pos + 1, true);
        }
      }
      pos++;
    }
  } else if (isSeparator) {
    // This is how we handle star
    return isExponentFloat(expression, pos + 1, state);
  } else if (
    (expression.charAt(pos) === "e" || expression.charAt(pos) === "E") &&
    !state
  ) {
    return isExponentFloat(expression, pos + 1, true);
  } else if (
    (pos > 0 && expression.charAt(pos) === "+") ||
    expression.charAt(pos) === "-"
  ) {
    if (
      expression.charAt(pos - 1) === "e" ||
      expression.charAt(pos - 1) === "E"
    ) {
      return isExponentFloat(expression, pos + 1, state);
    } else {
      return false;
    }
  }

  return state;
};
