const tape = require("tape");
const explore = require("../explore");
const construct_adjacency_list = require("../construct_adjacency_list");
tape(__filename, ((test) => {
    let al = construct_adjacency_list(['ABCD', 'BAFE', 'CAF', 'DAGH', 'EBIJ', 'FBIJ', 'FBC', 'GDH', 'HDG', 'IEJ', 'JEI', 'KL', 'LK']);
    test.deepEqual(explore(al, 'A').sort(), 'ABCDEFGHIJ'.split('').sort());
    test.deepEqual(explore(al, 'K').sort(), 'KL'.split('').sort());
    test.end();
}));