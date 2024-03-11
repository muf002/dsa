"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor(val) {
        this.value = val;
    }
}
class BST {
    constructor() {
        this.hight = 0;
    }
    insert(val) {
        const newNode = new TreeNode(val);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        this.insertNode(this.head, newNode);
    }
    insertNode(node, newNode) {
        if (node === null || node.value == newNode.value)
            return;
        if (newNode.value > node.value) {
            if (!node.right) {
                node.right = newNode;
                return;
            }
            this.insertNode(node.right, newNode);
        }
        else if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
                return;
            }
            this.insertNode(node.left, newNode);
        }
    }
    has(val) {
        return this.search(this.head, val);
    }
    search(node, val) {
        if (node == null)
            return false;
        if (node.value == val)
            return true;
        if (val < node.value)
            return this.search(node.left, val);
        if (val > node.value)
            return this.search(node.right, val);
    }
    preOrderTraversal() {
        let trav = [];
        this.preOrder(this.head, trav);
        return trav;
    }
    postOrderTraversal() {
        let trav = [];
        this.postOrder(this.head, trav);
        return trav;
    }
    inOrderTraversal() {
        let trav = [];
        this.inOrder(this.head, trav);
        return trav;
    }
    preOrder(node, trav) {
        if (node == null) {
            return;
        }
        trav.push(node.value);
        this.preOrder(node.left, trav);
        this.preOrder(node.right, trav);
    }
    inOrder(node, trav) {
        if (node == null) {
            return;
        }
        this.inOrder(node.left, trav);
        trav.push(node.value);
        this.inOrder(node.right, trav);
    }
    postOrder(node, trav) {
        if (node == null) {
            return;
        }
        this.postOrder(node.left, trav);
        this.postOrder(node.right, trav);
        trav.push(node.value);
    }
    levelOrderTraversal() {
        if (this.head === null)
            return;
        let q = [this.head];
        let trav = [];
        while (q.length != 0) {
            let node = q.shift();
            trav.push(node.value);
            if (node.left)
                q.push(node.left);
            if (node.right)
                q.push(node.right);
        }
        return trav;
    }
    getHeight() {
        this.hight = this.calculateHieght(this.head, 0);
        return this.hight;
    }
    calculateHieght(node, h) {
        if (node == null) {
            return h;
        }
        let hLeft = this.calculateHieght(node.left, h + 1);
        let hRight = this.calculateHieght(node.right, h + 1);
        return Math.max(hLeft, hRight);
    }
    remove(val) {
        if (!this.has(val))
            return;
        let deleted = false;
        let delNode = this.head;
        while (!deleted) {
            if (delNode.value == val) {
                if (delNode.left == null && delNode.right == null)
                    delNode = null;
                else if (delNode.left == null || delNode.right == null) {
                    delNode.value = delNode.left ? delNode.left.value : delNode.right.value;
                    if (delNode.left)
                        delete delNode.left;
                    if (delNode.right)
                        delete delNode.right;
                }
                else {
                    delNode.value = this.largestInLeft(delNode.left, delNode.value);
                }
                deleted = true;
                break;
            }
            if (val > delNode.value) {
                delNode = delNode.right;
            }
            else {
                delNode = delNode.left;
            }
        }
        return deleted;
    }
    largestInLeft(node, val) {
        if (node.right == null) {
            let value = node.value;
            node.value = val;
            if (node.left == null) {
                return value;
            }
            else {
                node.value = node.left.value;
                delete node.left;
                return value;
            }
        }
        return this.largestInLeft(node.right, val);
    }
}
exports.default = BST;
//# sourceMappingURL=bst.js.map