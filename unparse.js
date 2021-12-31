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
    const json = buf.toString("utf8");

    const ast = JSON.parse(json);
    const varArray = ast.body.map((e) => {
      return e.kind === "var";
    });
    varArray.forEach((e) => {
      if (e) {
        console.log("Don't use var");
        return;
      }
    });
    const code = escodegen.generate(ast);
    console.log(code);
  })
);
