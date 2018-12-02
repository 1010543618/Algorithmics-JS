const tape = require("tape");
const kruskal = require("../kruskal");
const is_connect = require("../is_connect");
const construct_adjacency_list = require("../../ch3/construct_adjacency_list");
tape(__filename, ((test) => {
    let al = construct_adjacency_list(['SAG', 'AE', 'BAC', 'CD', 'DE', 'EB', 'FAE', 'GF']);
    let el = construct_adjacency_list(['S|10|8', 'A2', 'B11', 'C3', 'D|-1|', 'E|-2|', 'F|-4||-1|', 'G1']);

    test.ok(is_connect(kruskal(al, el), ['SG', 'GF', 'FA', 'FE', 'EB', 'ED', 'BC'].map(d => d.split(''))));

    test.end();
}));