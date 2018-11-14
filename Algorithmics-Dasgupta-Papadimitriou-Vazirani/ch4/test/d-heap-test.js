const tape = require("tape");
const DHeap = require("../build/d-heap");
tape("explore", ((test) => {
    var a = new DHeap([7, 6, 5, 4]);
    a.insert(3);
    a.insert(2);
    a.insert(1);
    test.deepEqual(a.heap, [1, 4, 2, 6, 5, 7, 3]);

    a.delete();
    test.deepEqual(a.heap, [2, 4, 3, 6, 5, 7]);
    
    a.delete();
    test.deepEqual(a.heap, [3, 4, 7, 6, 5]);
    
    test.end();
}));