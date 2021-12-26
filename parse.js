const acorn = require("acorn");
const espurify = require("espurify");
const code = process.argv[2];
const ast = acorn.parse(code);
console.log(JSON.stringify(espurify(ast), null, 2));
