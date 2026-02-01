"use strict";
// TreeNode represents a single node of the binary tree
class TreeNode {
    // Constructor initializes node data and sets children to null
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
// BinaryTree class handles tree operations (OOP concept)
class BinaryTree {
    // Constructor initializes an empty tree
    constructor() {
        this.root = null;
    }
    // Method to create a sample binary tree
    createSampleTree() {
        // Creating root node
        this.root = new TreeNode(1);
        // Creating level 1 children
        this.root.left = new TreeNode(2);
        this.root.right = new TreeNode(3);
        // Creating level 2 children
        this.root.left.left = new TreeNode(4);
        this.root.left.right = new TreeNode(5);
        this.root.right.left = new TreeNode(6);
        this.root.right.right = new TreeNode(7);
    }
    // Inorder Traversal (Left → Node → Right)
    Inorder(node = this.root) {
        const result = []; // Array to store traversal result
        // Helper recursive function
        const traverse = (currentNode) => {
            // Base case: if node is null, return
            if (currentNode === null)
                return;
            // Step 1: Traverse left subtree
            traverse(currentNode.left);
            // Step 2: Visit the current node
            result.push(currentNode.data);
            // Step 3: Traverse right subtree
            traverse(currentNode.right);
        };
        // Start traversal from the given node (default is root)
        traverse(node);
        // Print inorder traversal
        console.log(result.join(' '));
    }
    // Preorder Traversal (Node → Left → Right)
    Preorder(node = this.root) {
        const result = []; // Array to store traversal result
        // Helper recursive function
        const traverse = (currentNode) => {
            // Base case: if node is null, return
            if (currentNode === null)
                return;
            // Step 1: Visit the current node
            result.push(currentNode.data);
            // Step 2: Traverse left subtree
            traverse(currentNode.left);
            // Step 3: Traverse right subtree
            traverse(currentNode.right);
        };
        // Start traversal from the given node (default is root)
        traverse(node);
        // Print preorder traversal
        console.log(result.join(' '));
    }
    // Postorder Traversal (Left → Right → Node)
    Postorder(node = this.root) {
        const result = []; // Array to store traversal result
        // Helper recursive function
        const traverse = (currentNode) => {
            // Base case: if node is null, return
            if (currentNode === null)
                return;
            // Step 1: Traverse left subtree
            traverse(currentNode.left);
            // Step 2: Traverse right subtree
            traverse(currentNode.right);
            // Step 3: Visit the current node
            result.push(currentNode.data);
        };
        // Start traversal from the given node (default is root)
        traverse(node);
        // Print postorder traversal
        console.log(result.join(' '));
    }
}
// Creating BinaryTree object
const tree = new BinaryTree();
// Creating the tree structure
tree.createSampleTree();
// Performing inorder traversal
tree.Inorder();
// Performing preorder traversal
tree.Preorder();
// Performing postorder traversal
tree.Postorder();
