"use strict";

var tape = require("tape");
var multiply = require("../multiply");

tape(__filename, function (test) {
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