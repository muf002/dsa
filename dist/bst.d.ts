declare class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val: number);
}
export default class BST {
    head: TreeNode | null;
    hight: number;
    constructor();
    insert(val: any): void;
    private insertNode;
    has(val: number): any;
    private search;
    preOrderTraversal(): any[];
    postOrderTraversal(): any[];
    inOrderTraversal(): any[];
    private preOrder;
    private inOrder;
    private postOrder;
    levelOrderTraversal(): any[];
    getHeight(): number;
    private calculateHieght;
    remove(val: any): boolean;
    private largestInLeft;
}
export {};
