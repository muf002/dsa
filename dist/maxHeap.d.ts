declare class MaxHeap {
    data: number[];
    length: number;
    constructor();
    insert(num: number): void;
    display(): void;
    delete(): number;
    heapifyDown(ind: number): void;
    heapifyUp(ind: any): void;
    parent(ind: number): number;
    leftChild(ind: number): number;
    rightChild(ind: number): number;
}
declare let heap: MaxHeap;
