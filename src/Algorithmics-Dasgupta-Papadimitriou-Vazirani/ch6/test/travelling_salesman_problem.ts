const tape = require("tape");
// Rullup导出的CommonJS和TS不同（不带default）
const construct_adjacency_list = require("../../ch3/construct_adjacency_list");
import travelling_salesman_problem from "../travelling_salesman_problem";

tape(__filename, ((test) => {
    var G = construct_adjacency_list(['ABCDE', 'BACDE', 'CABDE', 'DABCE', 'EABCD']);
    var el = construct_adjacency_list(['A2213', 'B2323', 'C2322', 'D1224', 'E4324']);
    test.deepEqual(travelling_salesman_problem(G, el, 'A'), 10);
    test.end();
}));