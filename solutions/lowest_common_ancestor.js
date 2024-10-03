/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // Base Case
  if (!root) {
    // O(1)
    return null;
  }

  // Left Tree 순회
  const left = lowestCommonAncestor(root.left, p, q); // O(T_left)

  // Right Tree 순회
  const right = lowestCommonAncestor(root.right, p, q); // O(T_right)

  // 순회중인 노드가 p 또는 q인 경우 자기자신을 리턴한다.
  if (root === p || root === q) {
    // O(1)
    return root;
    // 순회중인 노드의 left 노드와 right 노드가 동시에 반환되었을 경우 현재 노드가 LCA이므로 리턴한다.
  } else if (left && right) {
    // O(1)
    return root;
    // 순회중인 노드의 left 또는 right 노드중 하나가 반환되었을 경우 해당 노드가 LCA에 포함됨으로 left or right을 리턴한다.
  } else {
    // O(1)
    return left || right; // O(1)
  }
};
