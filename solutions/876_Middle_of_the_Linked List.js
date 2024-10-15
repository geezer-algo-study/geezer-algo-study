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
	if (head.next === null) return head; // head가 비어있을 경우 그대로 반환

	let stack = [];
	let node = head;

	while (node !== null) {
		// 모든 노드를 배열에 추가
		stack.push(node);
		node = node.next;
	}

	let i = 0;
	// 문제에서 기술한 배열의 절반의 위치를 짝수 및 홀수를 기준으로 정하기
	let halfOfLength =
		stack.length % 2 == 0
			? Math.ceil(stack.length / 2) + 1
			: Math.ceil(stack.length / 2);

	node = stack[halfOfLength - 1]; // 배열의 절반에 있는 위치의 노드를 반환

	return node;
};

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

	let stackSlower = []; // 노드를 두 번씩 추가할 배열
	let stackFaster = []; // 노드를 한 번씩 추가할 배열
	let nodeFaster = head;
	let nodeSlower = head;

	while (nodeFaster !== null) {
		// nodeFaster가 null이 아닐 경우 nodeSlower가 null인 경우는 없으므로 nodeFaster로 판단
		stackFaster.push(nodeFaster); // 두 배열에 일단 한 번씩을 추가하기
		stackSlower.push(nodeSlower);
		nodeFaster = nodeFaster.next; // 다음 노드 저장하기
		nodeSlower = nodeSlower.next;

		if (nodeFaster !== null) {
			// 만약 이번 노드가 null이 아닐 경우
			stackFaster.push(nodeFaster); // stackFaster에만 한 번 더 추가하기
			nodeFaster = nodeFaster.next;
		} else {
			// stackFaster에 더 이상 추가할 노드가 없다는 건 마지막 노드라는 뜻이므로
			// stackFaster의 절반 만큼만 노드를 추가한 stackSlower의 절반 위치의 노드를 반환
			nodeSlower = stackSlower[stackSlower.length - 1];
			break;
		}
	}

	return nodeSlower;
};
