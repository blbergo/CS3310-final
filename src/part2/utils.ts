/**
 * Check if the char is a digit
 * @param expression char
 * @returns {boolean} true if the char is a digit, false otherwise
 */
export const isDigit = (char: string) => {
  return !isNaN(parseInt(char));
};
