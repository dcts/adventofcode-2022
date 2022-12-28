const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(path.join(__dirname, "inputtest.txt"), "utf-8")
  .toString()
  .trim()
  .split("\n");

module.exports = {
  input
}