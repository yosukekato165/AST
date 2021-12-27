const run = require("./cli");
const estraverase = require("estraverse");

run((json) => {
  const ast = JSON.parse(json);

  //  +a
  estraverase.traverse(ast, {
    enter: function (currentNode, parentNode) {
      console.log(`node type ${currentNode.type}`);
    },
  });

  console.log(JSON.stringify(ast, null, 2));
});
