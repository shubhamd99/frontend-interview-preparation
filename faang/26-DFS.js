// Traversal - Visiting every nodes

// The depth-first search (DFS) algorithm starts with the initial node of graph G,
// and goes deeper until we find the goal node or the node with no children.

// Tree or Graph Traversal - O(n)
// 1. BFS
// 2. DFS (lower memory requirement)

// QnA:

// If you know a solution is not far from the root of the tree: BFS
// If the tree is very deep and solutions are rare: BFS (DFS will take long)
// If the tree is very wide: DFS (BFS will need too much memory)
// If solutions are frequent but located deep in the tree: DFS
// Determining whether a path exists between two nodes: DFS
// Finding the shortest path: BFS

// Three ways to implement DFS:

//    101
//   /   \
//  33   105

// InOrder - 33, 101, 105
// PreOrder - 101, 33, 105
// PostOrder - 33, 105, 101

//         9
//    4        20
// 1    6   15   170

// InOrder - 1, 4, 6, 9, 15, 20, 170
// PreOrder - 9, 4, 1, 6, 20, 15, 170 - We can re-create new tree easily from this
// PostOrder - 1, 6, 4, 15, 170, 20, 9

class Node {
    /**
     * 
     * @param {number} value 
     */
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    depthFirstSearchInOrder() {
        return traverseInOrder(this.root, []);
    }

    depthFirstSearchPostOrder() {
        return traversePostOrder(this.root, []);
    }

    depthFirstSearchPreOrder() {
        return traversePreOrder(this.root, []);
    }
}

/**
 * 
 * @param {Node} node 
 * @param {number[]} list 
 */
function traverseInOrder(node, list) {
    if (node.left) {
        traverseInOrder(node.left, list); // Keep going left
    }
    // Will traverse left all to end and then push it to list
    list.push(node.value);
    if (node.right) {
        traverseInOrder(node.right, list); // Keep going left
    }
    return list;
}

/**
 * 
 * @param {Node} node 
 * @param {number[]} list 
 */
function traversePostOrder(node, list) {
    if (node.left) {
        traversePostOrder(node.left, list); // Keep going left
    }
    if (node.right) {
        traversePostOrder(node.right, list); // Keep going left
    }
    list.push(node.value); // Post -> At the end
    return list;
}

/**
 * 
 * @param {Node} node 
 * @param {number[]} list 
 */
function traversePreOrder(node, list) {
    list.push(node.value); // Pre -> At the beginning
    if (node.left) {
        traversePreOrder(node.left, list); // Keep going left
    }
    if (node.right) {
        traversePreOrder(node.right, list); // Keep going left
    }
    return list;
}