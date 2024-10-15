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
    let lNode = root.left;
    let rNode = root.right;
    let isVisited = [];

    

    return lNode.val - rNode.val
};

var dfs = function(node, depth) {
    let leafNode;
    let leafDepth = depth;

    if(node.left !== null) {
        leafDepth++;
        dfs(node.left, leafDepth);
    }
    
    if(node.right !== null) {
        leafDepth++;
        dfs(node.right, leafDepth);
    }

    if()

    return node;
}