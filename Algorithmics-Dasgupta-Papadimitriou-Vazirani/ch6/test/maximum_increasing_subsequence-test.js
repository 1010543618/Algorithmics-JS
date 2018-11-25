const tape = require("tape");
const maximum_increasing_subsequence = require("../build/maximum_increasing_subsequence");
tape("", ((test) => {
    test.deepEqual(maximum_increasing_subsequence([5, 2, 8, 6, 3, 6, 9, 7]), [1, 4, 5, 6]);
    test.end();
}));