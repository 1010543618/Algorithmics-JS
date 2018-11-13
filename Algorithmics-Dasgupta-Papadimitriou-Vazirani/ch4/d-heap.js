export default class DHeap {
    constructor(arr = [], d = 2) {
        this.heap = [];
        this.d = d;
        arr.forEach(d => this.insert(d))
    }

    insert(val) {

        this.heap.push(val);

        if (this.heap.length <= this.d) {
            return;
        }

        let ci = this.heap.length - 1,
            pi = Math.floor((ci - 1) / this.d);


        while (pi >= 0) {
            if (this.heap[pi] > this.heap[ci]) {
                [this.heap[pi], this.heap[ci]] = [this.heap[ci], this.heap[pi]];
                ci = pi;
                pi = Math.floor((pi - 1) / this.d);
            } else {
                return;
            }
        }
    }

    delete() {
        let d = this.d,
            heap = this.heap,
            ci = 0,
            len = heap.length - 1;

        [heap[ci], heap[len]] = [heap[len], heap[ci]];
        len--;

        while ((ci * d + 1) < len) {
            let min = heap[ci * d + 1],
                mini = ci * d + 1;

            for (let i = 2; i <= d; i++) {
                if (heap[ci * d + i] == undefined) {
                    break;
                }
                if (heap[ci * d + i] < min) {
                    min = heap[ci * d + i];
                    mini = ci * d + i;
                }
            }

            if (heap[ci] > heap[mini]) {
                [heap[ci], heap[mini]] = [heap[mini], heap[ci]];
                ci = mini;
            } else {
                break;
            }

        }

        return heap.pop();
    }
}

var a = new DHeap([7, 6, 5, 4]);
a.insert(3);
a.insert(2);
a.insert(1);
console.log(a.heap); //[1, 4, 2, 6, 5, 7, 3]
a.delete();
console.log(a.heap); //[2, 4, 3, 6, 5, 7]
a.delete();
console.log(a.heap); //[3, 4, 7, 6, 5]