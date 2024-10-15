/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 내 풀이
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let count = 1;
  let currNode = head;

  // 링크드리스트 순회하며 총 노드의 개수 구하기
  while (currNode.next !== null) {
    count++;
    currNode = currNode.next;
  }

  // 중간 노드 찾아서 반환
  let result = head;
  for (let i = 0; i < Math.floor(count / 2); i++) {
    result = result.next;
  }

  return result;
};

// 다른 사람 풀이
// 포인터를 2개를 이용! fast는 2 노드씩 건너뛰며 순회, slow는 1 노드씩 건너뛰며 순회
// fast가 마지막에 다다르면, slow는 리스트에 중간에 위치할 것
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};
