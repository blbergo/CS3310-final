import { integerLiterals } from "./integer";

console.log("Running tests...");
console.log("\n");

console.log("Decimal Integer Tests:");
console.log("0 - " + integerLiterals("0") + ". Expecting: true."); // true
console.log("01 - " + integerLiterals("01") + ". Epxecting: false."); // false
console.log("00 - " + integerLiterals("00") + ". Epxecting: true."); // true
console.log("0_0 - " + integerLiterals("0_0") + ". Epxecting: true."); // true
console.log("_0 - " + integerLiterals("_0") + ". Epxecting: false."); // false
console.log("0_ - " + integerLiterals("0_") + ". Epxecting: false."); // false

console.log(
  "100_000_000_000 - " +
    integerLiterals("100_000_000_000") +
    ". Epxecting: true.",
); // true
console.log(
  "940213_232_+2323 - " +
    integerLiterals("940213_232_+2323") +
    ". Epxecting: false.",
); // false
console.log(
  "940213_232_2323 - " +
    integerLiterals("940213_232_2323") +
    ". Epxecting: true.",
); // true
console.log(
  "940213_232_0323 - " +
    integerLiterals("940213_232_0323") +
    ". Epxecting: false.",
); // false

console.log("Decimal Integer Tests Complete.");
console.log("\n");

console.log("Hexadecimal Integer Tests:");

console.log(
  "0x100_000_000_000 - " +
    integerLiterals("0x100_000_000_000") +
    ". Epxecting: true.",
); // true
console.log(
  "0x940213_232_+2323 - " +
    integerLiterals("0x940213_232_+2323") +
    ". Epxecting: false.",
); // false
console.log(
  "0xdeadbeef - " + integerLiterals("0xdeadbeef") + ". Epxecting: true.",
); // true
console.log(
  "0x_3df543_12 - " + integerLiterals("0x_3df543_12") + ". Epxecting: true.",
); // true

console.log("Hexadecimal Integer Tests Complete.");
console.log("\n");

console.log("Octal Integer Tests:");

console.log(
  "0o100_000_000_000 - " +
    integerLiterals("0o100_000_000_000") +
    ". Epxecting: true.",
); // true
console.log(
  "0o940213_232_+2323 - " +
    integerLiterals("0o940213_232_+2323") +
    ". Epxecting: false.",
); // false
console.log(
  "0o940213_232_2323 - " +
    integerLiterals("0o940213_232_2323") +
    ". Epxecting: false.",
); // false
console.log(
  "0o1234567 - " + integerLiterals("0o1234567") + ". Epxecting: true.",
); // true
console.log("0o_3_4_5 - " + integerLiterals("0o_3_4_5") + ". Epxecting: true."); // true

console.log("All tests complete.");
