const tape = require("tape");
const levenshtein_distance = require("../levenshtein_distance");
tape(__filename, ((test) => {
    test.deepEqual(levenshtein_distance("EXPONENTIAL", "POLYNOMIAL"), 6);
    test.deepEqual(levenshtein_distance("AAA", "AAA"), 0);
    test.deepEqual(levenshtein_distance("AAA", ""), 3);
    test.deepEqual(levenshtein_distance("ACACAC", "ABABAB"), 3);
    test.end();
}));