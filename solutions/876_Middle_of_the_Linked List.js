/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
	if (head.next === null) return head;

	let stack = [];
	let node = head;

	while (node !== null) {
		stack.push(node);
		node = node.next;
	}

	let i = 0;
	let halfOfLength =
		stack.length % 2 == 0
			? Math.ceil(stack.length / 2) + 1
			: Math.ceil(stack.length / 2);

	node = stack[halfOfLength - 1];

	return node;
};
