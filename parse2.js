const acorn = require("acorn");
const concat = require("concat-stream");
const fs = require("fs");

let input;

const file = process.argv[2];
if (file && file != "-") {
  input = fs.createReadStream(file);
} else {
  input = process.stdin;
}

input.pipe(
  concat((buf) => {
    const code = buf.toString("utf8");
    const ast = acorn.parse(code);
    const espurify = require("espurify");
    console.log(JSON.stringify(espurify(ast), null, 2));
  })
);
