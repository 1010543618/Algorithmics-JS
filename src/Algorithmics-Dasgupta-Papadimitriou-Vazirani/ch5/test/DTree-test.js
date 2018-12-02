const tape = require("tape");
const DTree = require("../DTree");
tape(__filename, ((test) => {
    let [t1, t2, t3, t4] = ['a', 'b', 'c', 'd'].map(d => new DTree(d));
    DTree.union(t1, t2);
    DTree.union(t3, t4);
    test.deepEqual(t1.parent, t2);
    test.deepEqual(t3.parent, t4);

    DTree.union(t1, t3);
    test.deepEqual(DTree.find(t1), t4);
    test.deepEqual(DTree.find(t2), t4);
    test.deepEqual(DTree.find(t3), t4);

    test.end();
}));