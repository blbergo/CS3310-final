import { isNum, isHex, isOctal } from "./checkInt";

/**
 * Function that determines if a string is either a valid decimal, hex, or octal integer
 * Mimics the behavior of an NFA by parsing and evaluating the string character by character
 * @param {String} s sequence of characters to evaluate
 * @returns {Boolean} true if s is an integer, false otherwise
 */

export const integerLiterals = (s: string): boolean => {
  let iZero,
    isNew,
    startsZero,
    accepting = false;
  let starting = true;

  for (let i = 0; i < s.length; i++) {
    if (starting) {
      if (s[i] === "0") {
        startsZero = true;
        iZero = true;
      } else if (s[i] === "_") return false;
      else if (!isNum(s[i])) return false;
      starting = false;
    } else if (startsZero && i == 1) {
      if (s[i].toLowerCase() === "x") {
        return parseHex(s.slice(i + 1));
      } else if (s[i].toLowerCase() === "o") {
        return parseOctal(s.slice(i + 1));
      }
    } else if (!isNum(s[i]) && s[i] !== "_") return false;
    else if (s[i] === "_") {
      if (isNew) return false;
      accepting = false;
      isNew = true;
      iZero = false;
    } else if (s[i] === "0") {
      if (isNew || starting) iZero = true;
      isNew = false;
      accepting = true;
    } else if (iZero) return false;
    else {
      accepting = true;
      isNew = false;
    }
    starting = false;
  }
  return accepting;
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
