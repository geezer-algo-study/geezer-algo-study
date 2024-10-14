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
 
var diameterOfBinaryTree = function(root) {
    let maxDistance = 0;

    var dfs = function(node) {
        if(node === null) return 0;

        let lLeafDepth = dfs(node.left);
        let rLeafDepth = dfs(node.right);

        maxDistance = Math.max(maxDistance, lLeafDepth + rLeafDepth);

        return Math.max(lLeafDepth, rLeafDepth) + 1;
    }

    dfs(root);

    return maxDistance;
};
