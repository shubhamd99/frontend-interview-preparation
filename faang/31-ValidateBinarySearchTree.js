// https://leetcode.com/problems/validate-binary-search-tree/

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// tree values should not be duplicate

/**
 * Time - O(N)
 * Space - O(N)
 * @param {Node} node 
 * @param {number} min 
 * @param {number} max 
 */
function dfs(node, min, max) {
    if (node.val <= min || node.val >= max) {
        return false;
    }
    if (node.left) {
        if (!dfs(node.left, min, node.val)) {
            return false;
        }
    }
    if (node.right) {
        if (!dfs(node.right, node.val, max)) {
            return false;
        }
    }
    return true;
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
 * @return {boolean}
 */
var isValidBST = function (root) {
    if (!root) return true;
    return dfs(root, -Infinity, Infinity); // preOrder
};


