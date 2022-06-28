// https://leetcode.com/problems/binary-tree-level-order-traversal/

// Given the root of a binary tree, return the level order traversal of its nodes' values.
// (i.e., from left to right, level by level).

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Time - O(N)
 * Space - O(2N) -> O(N)
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    let res = [];
    let queue = [root]; // Keep track of the current level child nodes (width/breadth)

    while (queue.length > 0) {
        let queueLength = queue.length;
        let count = 0;
        const currentLevelValues = [];

        // Level processing
        while (count < queueLength) {
            const node = queue.shift();
            currentLevelValues.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

            count++;
        }

        res.push(currentLevelValues);
    }

    return res;
};