const acorn = require("acorn");
const code = process.argv[2];
const ast = acorn.parse(code);
console.log(ast);
