import { isNum, isHex, isOctal } from "./checkInt";

/**
 * Function that determines if a string is either a valid decimal, hex, or octal integer
 * @param {String} s sequence of characters to evaluate
 * @returns {Boolean} true if s is an integer, false otherwise
 */

export const integerLiterals = (s: string): boolean => {
  let iZero,
    isNew,
    state = false;
  let starting = true;

  if (s[0] === "_") return false;
  if (s.length >= 2 && s[0] === "0") {
    if (s[1].toLowerCase() === "x") return parseHex(s.slice(2));
    else if (s[1].toLowerCase() === "o") return parseOctal(s.slice(2));
  }

  for (let i = 0; i < s.length; i++) {
    if (!isNum(s[i]) && s[i] !== "_") return false;
    else if (s[i] === "_") {
      state = false;
      isNew = true;
    } else if (s[i] === "0") {
      if (isNew || starting) iZero = true;
      else iZero = false;
      isNew = false;
      state = true;
    } else if (iZero) return false;
    else {
      state = true;
      isNew = false;
    }
    starting = false;
  }
  return state;
};

/**
 * Helper function to determine if a character is a valid hex integer
 * @param {String} s character to evaluate
 * @returns {Boolean} true if s is a valid hex integer, false otherwise
 */

const parseHex = (s: string): boolean => {
  let state = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "_") state = false;
    else if (!isHex(s[i])) return false;
    else state = true;
  }
  return state;
};

/**
 * Helper function to determine if a character is a valid octal integer
 * @param {String} s character to evaluate
 * @returns {Boolean} true if s is a valid octal integer, false otherwise
 */

const parseOctal = (s: string): boolean => {
  let state = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "_") state = false;
    else if (!isOctal(s[i])) return false;
    else state = true;
  }
  return state;
};
