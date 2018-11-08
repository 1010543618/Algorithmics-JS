const tape = require("tape");
const get_strongly_connected_component = require("../build/get_strongly_connected_component");
const construct_adjacency_list = require("../build/construct_adjacency_list");

tape("explore", ((test) => {
    let al = construct_adjacency_list(['A', 'BAE', 'CBF', 'DB', 'EB', 'FCE', 'GEI', 'HFG', 'IJ', 'JGL', 'KH', 'LK']);
    test.deepEqual(get_strongly_connected_component(al).map(d => {
        return d.sort()
    }), ['A'.split(''), 'BE'.split(''), 'D'.split(''), 'CF'.split(''), 'GHIJKL'.split('')].map(d => {
        return d.sort()
    }));
    test.end();
}));