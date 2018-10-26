"use strict";

var tape = require("tape");
var babel = require("babel-core");
var path = require("path");

babel.transformFile(path.resolve(__dirname, '../selection.js'), {
  plugins: ["transform-es2015-modules-commonjs"]
}, function (err, result) {
  eval(result.code);
  let multiply = exports.default;

  tape("multiply", function (test) {
    test.equal(multiply([0], 1), 0);
    test.equal(multiply([1,0], 1), 0);
    test.equal(multiply([0,1], 1), 0);
    test.equal(multiply([0,1], 2), 1);
    test.equal(multiply([4,2,1,3,5,6,7,8], 3), 3);
    test.equal(multiply([4,2,1,3,5,6,7,8], 5), 5);
    test.end();
  });
});