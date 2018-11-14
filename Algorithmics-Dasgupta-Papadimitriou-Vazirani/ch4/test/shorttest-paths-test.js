const tape = require("tape");
const sp = require("../build/shorttest-paths");
const construct_adjacency_list = require("../../ch3/build/construct_adjacency_list");
tape("explore", ((test) => {
    let al = construct_adjacency_list(['SAG', 'AE', 'BAC', 'CD', 'DE', 'EB', 'FAE', 'GF']);
    let el = construct_adjacency_list(['S|10|8', 'A2', 'B11', 'C3', 'D|-1|', 'E|-2|', 'F|-4||-1|', 'G1']);

    test.deepEqual(sp(al, el, 'S'), {
        "S": 0,
        "A": 5,
        "B": 5,
        "C": 6,
        "D": 9,
        "E": 7,
        "F": 9,
        "G": 8
    });
    
    test.end();
}));