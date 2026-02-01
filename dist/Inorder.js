"use strict";
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    createSampleTree() {
        this.root = new TreeNode(1);
        this.root.left = new TreeNode(2);
        this.root.right = new TreeNode(3);
        this.root.left.left = new TreeNode(4);
        this.root.left.right = new TreeNode(5);
        this.root.right.left = new TreeNode(6);
        this.root.right.right = new TreeNode(7);
    }
    //Inorder Traversal
    Inorder(node = this.root) {
        const result = [];
        const traverse = (currentNode) => {
            if (currentNode === null)
                return;
            traverse(currentNode.left);
            result.push(currentNode.data);
            traverse(currentNode.right);
        };
        traverse(node);
        console.log(result.join(' '));
    }
}
const tree = new BinaryTree();
tree.createSampleTree();
tree.Inorder();
