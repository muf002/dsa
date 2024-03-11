class MinHeap {
  heap: number[];
  length: number;

  constructor() {
    this.heap = [];
    this.length = 0;
  }

  insert(num: number) {
    if (this.length == 0) {
      this.heap[this.length] = num;
      this.length++;
      return;
    }

    this.heap[this.length] = num;
    this.heapifyUp();
    this.length++;
  }

  heapifyUp() {
    let currInd = this.length;
    let parentInd = this.parent(currInd);

    while (this.heap[currInd] < this.heap[parentInd]) {
      let temp = this.heap[currInd];
      this.heap[currInd] = this.heap[parentInd];
      this.heap[parentInd] = temp;

      currInd = parentInd;
      parentInd = this.parent(currInd);
    }
  }

  remove() {
    if (this.length == 1) {
      this.length--;
      return this.heap[this.length];
    }

    const res = this.heap[0];
    this.length--;
    this.heap[0] = this.heap[this.length];
    this.heapifyDown()
    return res
  }

  heapifyDown() {
    let currInd = 0;
    let leftInd = this.leftChild(currInd);
    let rightInd = this.rightChild(currInd);

    while (rightInd < this.length && leftInd < this.length) {
      let left = this.heap[leftInd];
      let right = this.heap[rightInd];
      let curr = this.heap[currInd];
      if (Math.min(left, right) == left && curr > left) {
        this.heap[leftInd] = curr;
        this.heap[currInd] = left;
        currInd = leftInd;
      } else if (Math.min(left, right) == right && curr > right) {
        this.heap[rightInd] = curr;
        this.heap[currInd] = right;
        currInd = rightInd;
      }
      leftInd = this.leftChild(currInd);
      rightInd = this.rightChild(currInd);
    }
  }

  parent(ind: number) {
    return Math.floor((ind - 1) / 2);
  }

  leftChild(ind: number) {
    return 2 * ind + 1;
  }

  rightChild(ind: number) {
    return 2 * ind + 2;
  }

  display() {
    let temp = []
    for(let i=0; i<this.length; i++) {
      temp.push(this.heap[i])
    }
    console.log(temp)
  }
}

const minHeap = new MinHeap()
minHeap.insert(2)
minHeap.insert(4)
minHeap.insert(6)
minHeap.insert(9)
minHeap.insert(8)
minHeap.insert(10)
minHeap.insert(7)
minHeap.insert(1)
minHeap.insert(3)

minHeap.display()
console.log(minHeap.remove())
console.log(minHeap.remove())
minHeap.display()

