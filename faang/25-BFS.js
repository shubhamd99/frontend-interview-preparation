// Traversal - Visiting every nodes

// BFS is a traversing algorithm where you should start traversing from a selected node (source or starting node)
// and traverse the graph layerwise thus exploring the neighbour nodes (nodes which are directly connected to source node).
// You must then move towards the next-level neighbour nodes.

// Tree or Graph Traversal - O(n)
// 1. BFS
// 2. DFS (lower memory requirement)

// When to use?
// when you want to find the shortest path from a certain source node to a certain destination.
// (Or more generally, the smallest number of steps to reach the end state from a given initial state.)

// When not to use?
// when you want to exhaust all possibilities,
// and check which one is the best/count the number of all possible ways. Use DFS here.

// QnA:

// If you know a solution is not far from the root of the tree: BFS

// If the tree is very deep and solutions are rare: BFS (DFS will take long)

// If the tree is very wide: DFS (BFS will need too much memory)

// If solutions are frequent but located deep in the tree: DFS

// Determining whether a path exists between two nodes: DFS

// Finding the shortest path: BFS

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

    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = []; // Keep track of the current level child nodes (width/breadth)
        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift(); // Remove and returns First item in queue
            list.push(currentNode.value);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }
}
