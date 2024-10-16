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
var maxDepth = function (root) {
	let lLength = 0;
	let rLength = 0;
	let max = 0;

	const dfs = (node) => {
		if (node.left != null) lLength = dfs(node.left);
		if (node.right != null) rLength = dfs(node.right);

		max = Math.max(lLength, rLength);

		return 1 + max;
	};

	dfs(root);

	return max + 1;
};
