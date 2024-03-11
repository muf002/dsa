"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bst_1 = require("./bst");
const tree = new bst_1.default();
tree.insert(5);
tree.insert(8);
tree.insert(2);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(6);
tree.insert(9);
console.log(tree.remove(2));
console.log(tree.inOrderTraversal());
//# sourceMappingURL=bstTest.js.map