export default class DHeap {
    constructor(arr = [], d = 2) {
        this.heap = [];
        this.d = d;
        arr.forEach(d => this.insert(d))
    }

    insert(val) {

        this.heap.push(val);

        if (this.heap.length <= this.d) {
            return this.heap;
        }

        let ci = this.heap.length - 1,
            pi = Math.floor((ci - 1) / this.d);

        while (pi >= 0) {
            if (this.heap[pi] > this.heap[ci]) {
                [this.heap[pi], this.heap[ci]] = [this.heap[ci], this.heap[pi]];
                ci = pi;
                pi = Math.floor((pi - 1) / this.d);
            } else {
                return this.heap;
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
