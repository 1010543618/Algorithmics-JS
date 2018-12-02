export default class DHeap {
    constructor(arr = [], d = 2, val_name = 'val') {
        this.heap = [];
        this.d = d;
        this.val_name = val_name;
        arr.forEach(d => this.insert(d))
    }

    insert(obj) {
        let val_name = this.val_name;

        this.heap.push(obj);

        if (this.heap.length <= this.d) {
            return this.heap;
        }

        let ci = this.heap.length - 1,
            pi = Math.floor((ci - 1) / this.d);

        while (pi >= 0) {
            if (this.heap[pi][val_name] > this.heap[ci][val_name]) {
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
            val_name = this.val_name,
            ci = 0,
            len = heap.length - 1;

        [heap[ci], heap[len]] = [heap[len], heap[ci]];
        len--;

        while ((ci * d + 1) < len) {
            let mini = ci * d + 1,
                min = heap[mini];

            for (let i = 2; i <= d; i++) {
                if (heap[ci * d + i] == undefined) {
                    break;
                }
                if (heap[ci * d + i][val_name] < min[val_name]) {
                    min = heap[ci * d + i];
                    mini = ci * d + i;
                }
            }

            if (heap[ci][val_name] > heap[mini][val_name]) {
                [heap[ci], heap[mini]] = [heap[mini], heap[ci]];
                ci = mini;
            } else {
                break;
            }

        }

        return heap.pop();
    }
}