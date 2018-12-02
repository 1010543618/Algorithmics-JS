const tape = require("tape");
const maximum_increasing_subsequence = require("../maximum_increasing_subsequence");
tape(__filename, ((test) => {
    test.deepEqual(maximum_increasing_subsequence([5, 2, 8, 6, 3, 6, 9, 7]), [1, 4, 5, 6]);
    test.end();
}));