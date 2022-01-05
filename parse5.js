const run = require("./cli");
const estraverase = require("estraverse");
const indent = require("indent-string");

run((json) => {
  const ast = JSON.parse(json);
  let depth = 0;

  //  +a
  estraverase.traverse(ast, {
    enter: function (currentNode, parentNode) {
      console.log(indent(`enter ${currentNode.type}`, depth));
      if (
        currentNode.type === "VariableDeclaration" &&
        currentNode.kind === "var"
      ) {
        throw new Error("Don't use var");
      }
      depth += 2;
    },

    leave: function (currentNode, parentNode) {
      depth -= 2;
      console.log(indent(`leave ${currentNode.type}`, depth));
    },
  });
});
