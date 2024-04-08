export const isNum = (c: string) => {
  if (isNaN(parseInt(c))) {
    return false;
  }
  return true;
};

export const isHex = (c: string) => {
  let reg = /[0-9a-fA-F]/;
  if (c.match(reg)) {
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
