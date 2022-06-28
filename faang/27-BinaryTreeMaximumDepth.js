/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Time - O(n)
 * Space - O(n)
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root, count = 0) {
    if (!root) return count;
    count++;
    
    // Will go till end in both left and right side, and will take the maximum value
    return Math.max(maxDepth(root.left, count), maxDepth(root.right, count));
};
