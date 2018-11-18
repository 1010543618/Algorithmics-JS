export default class Btree{
    constructor(v, lc, rc){
        this.val = v;
        this.leftChild = lc;
        this.rightChild = rc;
    }

    levelTraverse(){
        let que = [this],
        res = [],
        node = null;
        while(que.length){
            node = que.shift();
            res.push(node.val);
            node.leftChild && que.push(node.leftChild);
            node.rightChild && que.push(node.rightChild);
        }
        return res;
    }

}