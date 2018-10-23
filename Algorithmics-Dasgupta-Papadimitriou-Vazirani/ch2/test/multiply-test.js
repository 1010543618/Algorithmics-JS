"use strict";

var tape = require("tape");
var babel = require("babel-core");
var path = require("path");

babel.transformFile(path.resolve(__dirname, '../multiply.js'), {
  plugins: ["transform-es2015-modules-commonjs"]
}, function (err, result) {
  eval(result.code);
  let multiply = exports.default;

  tape("multiply", function (test) {
    test.equal(multiply(0, 0), 0);
    test.equal(multiply(1, 0), 0);
    test.equal(multiply(0, 1), 0);
    test.equal(multiply(1, 1), 1);
    test.equal(multiply(4, 7), 28);
    test.equal(multiply(10, 300), 3000);
    test.equal(multiply(1, 3000), 3000);
    test.equal(multiply(99, 99), 9801);
    test.end();
  });
});