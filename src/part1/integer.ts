import { isNum, isHex, isOctal } from "./checkInt";

export const integerLiterals = (s: string) => {
  let isNew,
    state,
    iZero = false;
  let starting = true;

  if (s[0] === "_") return false;
  if (s.length >= 2 && s[0] === "0") {
    if (s[1] === "x") return parseHex(s.slice(2));
    else if (s[1] === "o") return parseOctal(s.slice(2));
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

const parseHex = (s: string) => {
  let state = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "_") state = false;
    else if (!isHex(s[i])) return false;
    else state = true;
  }
  return state;
};

const parseOctal = (s: string) => {
  let state = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "_") state = false;
    else if (!isOctal(s[i])) return false;
    else state = true;
  }
  return state;
};
