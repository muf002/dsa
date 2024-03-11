declare class MinHeap {
    heap: number[];
    length: number;
    constructor();
    insert(num: number): void;
    heapifyUp(): void;
    remove(): number;
    heapifyDown(): void;
    parent(ind: number): number;
    leftChild(ind: number): number;
    rightChild(ind: number): number;
    display(): void;
}
declare const minHeap: MinHeap;
