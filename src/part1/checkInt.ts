/**
 * Helper function to determine if a character is an integer
 * @param {String} c string character to parse as a number and evaluate
 * @returns {Boolean} true if c is a number, false otherwise
 */

export const isNum = (c: string): boolean => {
  if (isNaN(parseInt(c))) {
    return false;
  }
  return true;
};

/**
 * Helper function to determine if a character follows hex integer syntax
 * @param {String} c string character to evaluate
 * @returns {Boolean} true if c is a valid hex integer, false otherwise
 */

export const isHex = (c: string): boolean => {
  let reg = /[0-9a-fA-F]/;
  if (c.match(reg)) {
    return true;
  }
  return false;
};

/**
 * Helper function to determine if a character follows octal integer syntax
 * @param {String} c string character to evaluate
 * @returns {Boolean} true if c is a valid octal integer, false otherwise
 */

export const isOctal = (c: string): boolean => {
  if (isNum(c) && parseInt(c) < 8) {
    return true;
  }
  return false;
};
