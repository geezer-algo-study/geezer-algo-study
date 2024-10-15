/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  const midIndex = Math.floor(head.length / 2);
  return head.slice(midIndex);
};
