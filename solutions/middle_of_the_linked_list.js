/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  const midIndex = Math.floor(head.length / 2);
  //head.slice가 함수가 아니라고 뜹니다...
  return head.slice(midIndex);
};
