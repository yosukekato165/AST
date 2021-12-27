const run = require("./cli");
const escodegen = require("escodegen");

run((json) => {
  const ast = JSON.parse(json);
  console.log(escodegen.generate(ast));
});
