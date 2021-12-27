const concat = require("concat-stream");
const fs = require("fs");

module.exports = (handler) => {
  let input;

  const file = process.argv[2];
  if (file && file != "-") {
    input = fs.createReadStream(file);
  } else {
    input = process.stdin;
  }

  input.pipe(
    concat((buf) => {
      handler(buf.toString("utf8"));
    })
  );
};
