// https://leetcode.com/problems/binary-tree-right-side-view/

// Given the root of a binary tree, imagine yourself standing on the right side of it,
// return the values of the nodes you can see ordered from top to bottom.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) { // BFS
    if (!root) return [];

    let res = [];
    let queue = [root]; // Keep track of the current level child nodes (width/breadth)

    while (queue.length > 0) {
        let queueLength = queue.length;
        let count = 0;
        let currentLevelValues = [];

        // Level processing
        while (count < queueLength) {
            const node = queue.shift();
            currentLevelValues.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

            count++;
        }

        // Breadth first go from left to right each level
        // Will just take last element of the current level and push it into result array to contruct right view of the tree
        res.push(currentLevelValues.pop());
        currentLevelValues = [];
    }

    return res;
};

const dfs = (node, currentLevel, result) => {
    if (!node) return;
    if (currentLevel >= result.length) {
        result.push(node.val);
    }

    if (node.right) {
        dfs(node.right, currentLevel + 1, result);
    }

    if (node.left) {
        dfs(node.left, currentLevel + 1, result);
    }
}


/**
 * T - O(N)
 * S - O(H)
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) { // DFS
    const result = [];
    dfs(root, 0, result);
    return result;
}
