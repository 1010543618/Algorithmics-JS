import DHeap from "../ch4/DHeap";
import BTree from "./BTree";
export default function huffman(f) {
    let dheap = new DHeap(f.map(d => new BTree(d, null, null)));
    for (let i = 0; i < f.length - 1; i++) {
        let f1 = dheap.delete(),
            f2 = dheap.delete();
        dheap.insert(new BTree(f1.val+f2.val, f1, f2));
    }

    return dheap.delete();
}
