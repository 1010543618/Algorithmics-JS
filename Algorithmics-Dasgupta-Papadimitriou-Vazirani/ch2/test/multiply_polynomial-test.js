"use strict";

var tape = require("tape");
var multiply_polynomial = require("../build/multiply_polynomial");

tape("multiply_polynomial", function (test) {
    test.deepEqual(multiply_polynomial([0], [0]), [0]);
    test.deepEqual(multiply_polynomial([0], [1]), [0]);
    test.deepEqual(multiply_polynomial([0], [1, 2, 3]), [0, 0, 0, 0, 0]);
    test.deepEqual(multiply_polynomial([1], [1, 2, 3]), [1, 2, 3, 0, 0]);
    test.deepEqual(multiply_polynomial([1, 2, 3], [4, 5, 6]), [4, 13, 28, 27, 18]);
    test.deepEqual(multiply_polynomial([1, 2, 3], [4, 5, 6, 7]), [4, 13, 28, 34, 32, 21, 0]);
    test.end();
});