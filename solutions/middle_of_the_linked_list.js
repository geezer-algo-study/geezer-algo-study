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
  let nodeMap = new Map();
  let index = 1;
  while (head) {
    if (!nodeMap.has(head)) {
      nodeMap.set(index, head);
      index += 1;
      head = head.next;
    }
  }

  if (nodeMap.size % 2 === 0) {
    return nodeMap.get(nodeMap.size / 2 + 1);
  }

  if (nodeMap.size % 2 !== 0) {
    return nodeMap.get(Math.round(nodeMap.size / 2));
  }
};
