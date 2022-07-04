// https://leetcode.com/problems/count-complete-tree-nodes/

// Given the root of a complete binary tree, return the number of the nodes in the tree.

// Design an algorithm that runs in less than O(n) time complexity.


// Input: root = [1,2,3,4,5,6]
// Output: 6

// Input: root = []
// Output: 0

// Input: root = [1]
// Output: 1

const getTreeHeight = function (root) {
    let height = 0;
    while (root.left !== null) {
        height++;
        root = root.left;
    }

    return height;
}

const nodeExists = function (idxToFind, height, node) {
    let left = 0, right = Math.pow(2, height) - 1, count = 0;

    while (count < height) {
        const midOfNode = Math.ceil((left + right) / 2);

        if (idxToFind >= midOfNode) {
            node = node.right;
            left = midOfNode;
        } else {
            node = node.left;
            right = midOfNode - 1;
        }

        count++;
    }

    return node !== null;
}

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
 * @return {number}
 */
var countNodes = function (root) {
    if (!root) return 0;

    const height = getTreeHeight(root);

    if (height === 0) return 1;

    const upperCount = Math.pow(2, height) - 1

    let left = 0, right = upperCount;

    while (left < right) {
        const idxToFind = Math.ceil((left + right) / 2);

        if (nodeExists(idxToFind, height, root)) {
            left = idxToFind;
        } else {
            right = idxToFind - 1;
        }
    }

    return upperCount + left + 1; // indx starts from 0
};