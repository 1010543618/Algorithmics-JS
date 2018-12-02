const tape = require("tape");
const huffman = require("../huffman");
tape(__filename, ((test) => {
    test.deepEqual(huffman([30,20,140,10]).levelTraverse(), [200, 30, 170, 30, 140, 10, 20]);
    test.end();
}));