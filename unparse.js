const concat = require("concat-stream");
const escodegen = require("escodegen");
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
    console.log(`unperse buf ${buf}`);
    const json = buf.toString("utf8");
    const ast = JSON.parse(json);
    const code = escodegen.generate(ast);
    console.log(code);
  })
);
