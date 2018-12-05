const tape = require("tape");
// Rullup导出的CommonJS和TS不同（不带default）
const construct_adjacency_list = require("../../ch3/construct_adjacency_list");
import maximizing_flow from "../maximizing_flow";

tape(__filename, ((test) => {
    var G = construct_adjacency_list(['sabc', 'ad', 'bad', 'ce', 'dcet', 'et', 't']);
    var el = construct_adjacency_list(['s334', 'a2', 'b|10|1', 'c5', 'd112', 'e5', 't']);
    test.deepEqual(maximizing_flow(G, el, 's', 't'), 7);
    test.end();
}));