/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let nodeMap = new Map();

  // 시간복잡도 최대 O(n)
  while (head) {
    // 순회하면서 head를 nodeMap에 넣어준다.
    // O(1)
    if (nodeMap.has(head)) {
      // head가 이미 nodeMap에 존재할시 true 반환
      return true;
    }
    // nodeMap에 head 넣어주고 현재 head를 다음 head로 교체
    // O(1)
    nodeMap.set(head);
    head = head.next;
  }
  // 그 외에는 false를 반환한다.
  return false;
};
