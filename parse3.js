const run = require("./cli");
const acorn = require("acorn");

run((code) => {
  const ast = acorn.parse(code);
  console.log(JSON.stringify(ast, null, 2));
});
