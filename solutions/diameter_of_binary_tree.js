/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} curr
 * @param {number} depth
 * @return {number}
 */
const getLength = (curr, depth) => {
  if (curr === null) return depth;

  lengths = [];
  lengths.push(getLength(curr.left, depth + 1));
  lengths.push(getLength(curr.right, depth + 1));

  return Math.max(...lengths);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  const left = getLength(root.left, 0);
  const right = getLength(root.right, 0);

  return left + right;
};
