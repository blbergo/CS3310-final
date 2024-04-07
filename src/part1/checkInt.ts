export const isNum = (c: string) => {
  if (isNaN(parseInt(c))) {
    return false;
  }
  return true;
};

export const isHex = (c: string) => {
  if (
    isNum(c) ||
    c === "a" ||
    c === "b" ||
    c === "c" ||
    c === "d" ||
    c === "e" ||
    c === "f"
  ) {
    return true;
  }
  return false;
};

export const isOctal = (c: string) => {
  if (isNum(c) && parseInt(c) < 8) {
    return true;
  }
  return false;
};
