const tape = require("tape");
const DHeap = require("../DHeap");
tape(__filename, ((test) => {
    var a = new DHeap([7, 6, 5, 4].map(val=>{return {val}}));
    a.insert({val:3});
    a.insert({val:2});
    a.insert({val:1});
    test.deepEqual(a.heap, [1, 4, 2, 6, 5, 7, 3].map(val=>{return {val}}));

    a.delete();
    test.deepEqual(a.heap, [2, 4, 3, 6, 5, 7].map(val=>{return {val}}));
    
    a.delete();
    test.deepEqual(a.heap, [3, 4, 7, 6, 5].map(val=>{return {val}}));
    
    test.end();
}));