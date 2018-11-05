const tape = require("tape");
const explore = require("../build/explore");
const construct_adjacency_list = require("../build/construct_adjacency_list");
tape("explore", ((test) => {
    let al = construct_adjacency_list(['ABCD', 'BAFE', 'CAF', 'DAGH', 'EBIJ', 'FBIJ', 'FBC', 'GDH', 'HDG', 'IEJ', 'JEI', 'KL', 'LK']);
    test.deepEqual(explore(al, 'A').sort(), 'ABCDEFGHIJ'.split('').sort());
    test.deepEqual(explore(al, 'K').sort(), 'KL'.split('').sort());
    test.end();
}));