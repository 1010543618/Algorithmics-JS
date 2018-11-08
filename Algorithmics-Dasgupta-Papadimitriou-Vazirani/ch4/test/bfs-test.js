const tape = require("tape");
const bfs = require("../build/bfs");
const construct_adjacency_list = require("../../ch3/build/construct_adjacency_list");
tape("explore", ((test) => {
    let al = construct_adjacency_list(['ABCD', 'BAFE', 'CAF', 'DAGH', 'EBIJ', 'FBIJ', 'FBC', 'GDH', 'HDG', 'IEJ', 'JEI', 'KL', 'LK']);
    test.deepEqual(bfs(al, 'A'), {"A":0,"B":1,"C":1,"D":1,"F":2,"E":2,"G":2,"H":2,"I":3,"J":3});
    test.end();
}));