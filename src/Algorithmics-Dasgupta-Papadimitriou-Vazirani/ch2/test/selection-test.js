"use strict";

var tape = require("tape");
var selection = require("../selection");

tape(__filename, function (test) {
  test.equal(selection([0], 1), 0);
  test.equal(selection([1,0], 1), 0);
  test.equal(selection([0,1], 1), 0);
  test.equal(selection([0,1], 2), 1);
  test.equal(selection([4,2,1,3,5,6,7,8], 3), 3);
  test.equal(selection([4,2,1,3,5,6,7,8], 5), 5);
  test.end();
});
