class MaxHeap {
    constructor() {
        this.data = [];
        this.length = 0;
    }
    insert(num) {
        if (this.length == 0) {
            this.data[this.length] = num;
            this.length++;
        }
        else {
            this.data[this.length] = num;
            this.heapifyUp(this.length);
            this.length++;
        }
    }
    display() {
        console.log(this.data);
    }
    delete() {
        if (this.length == 1) {
            this.length--;
            return this.data[this.length];
        }
        else {
            const result = this.data[0];
            this.length--;
            this.data[0] = this.data[this.length];
            this.heapifyDown(0);
            return result;
        }
    }
    heapifyDown(ind) {
        const leftInd = this.leftChild(ind);
        const rightInd = this.leftChild(ind);
        if (ind >= this.length || leftInd >= this.length)
            return;
        const currVal = this.data[ind];
        if ((Math.max(this.data[leftInd], this.data[rightInd]) === this.data[leftInd]) && this.data[ind] < this.data[leftInd]) {
            this.data[ind] = this.data[leftInd];
            this.data[leftInd] = currVal;
            this.heapifyDown(leftInd);
        }
        else if ((Math.max(this.data[leftInd], this.data[rightInd]) === this.data[rightInd]) && this.data[ind] < this.data[rightInd]) {
            this.data[ind] = this.data[rightInd];
            this.data[rightInd] = currVal;
            this.heapifyDown(rightInd);
        }
    }
    heapifyUp(ind) {
        if (this.data[ind] === null)
            return;
        const parentInd = this.parent(ind);
        const parentVal = this.data[parentInd];
        const currVal = this.data[ind];
        if (currVal > parentVal) {
            this.data[parentInd] = currVal;
            this.data[ind] = parentVal;
            this.heapifyUp(parentInd);
        }
    }
    parent(ind) {
        return Math.floor((ind - 1) / 2);
    }
    leftChild(ind) {
        return 2 * ind + 1;
    }
    rightChild(ind) {
        return 2 * ind + 2;
    }
}
let heap = new MaxHeap();
heap.insert(3);
heap.insert(5);
heap.insert(3);
heap.insert(2);
heap.insert(9);
heap.display();
heap.delete();
heap.display();
//# sourceMappingURL=maxHeap.js.map