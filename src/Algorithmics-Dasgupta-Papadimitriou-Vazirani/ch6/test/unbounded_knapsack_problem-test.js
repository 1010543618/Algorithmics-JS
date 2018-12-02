const tape = require("tape");
const unbounded_knapsack_problem = require("../unbounded_knapsack_problem");
tape(__filename, ((test) => {
    let goods = [{
        w: 6,
        v: 30
    }, {
        w: 3,
        v: 14
    }, {
        w: 4,
        v: 16
    }, {
        w: 2,
        v: 9
    }];
    test.deepEqual(unbounded_knapsack_problem(goods, 10), 48);
    test.deepEqual(unbounded_knapsack_problem(goods, 6), 30);
    test.deepEqual(unbounded_knapsack_problem(goods, 5), 23);
    test.end();
}));