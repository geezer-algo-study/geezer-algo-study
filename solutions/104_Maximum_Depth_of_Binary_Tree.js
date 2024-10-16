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
		if (node.left != null) lLength = dfs(node.left); // 왼쪽 노드 길이 보관
		if (node.right != null) rLength = dfs(node.right); // 오른쪽 노드 길이 보관

		max = Math.max(lLength, rLength); // 길이 비교

		return 1 + max; // 1씩 길이 추가
	};

	dfs(root);

	return max + 1; // root 노드를 더한 최대 길이
};
