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
var diameterOfBinaryTree = function (root) {
  let maxLength = 0;

  const getHeight = (node) => {
    if (node === null) return 0;

    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    maxLength = Math.max(maxLength, leftHeight + rightHeight);

    return Math.max(leftHeight, rightHeight) + 1;
  };

  getHeight(root);

  return maxLength;
};
