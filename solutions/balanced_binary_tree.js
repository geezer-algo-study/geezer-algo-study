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
var isBalanced = function (root) {
  // base case when root is []
  if (root === null) return true;

  // left subtree 확인
  const leftDepth = getMaxDepth(root.left);
  // right subtree 확인
  const rightDepth = getMaxDepth(root.right);

  return (
    Math.abs(leftDepth - rightDepth) <= 1 &&
    isBalanced(root.left) === true &&
    isBalanced(root.right) === true
  );
};

// 깊이 확인하는 함수
const getMaxDepth = (node) => {
  if (node === null) return 0;

  // 오른쪽 Subtree와 왼쪽 Subtree의 height를 구해서 더 높은값에 +1을 해준다.
  return Math.max(getMaxDepth(node.left), getMaxDepth(node.right)) + 1;
};
