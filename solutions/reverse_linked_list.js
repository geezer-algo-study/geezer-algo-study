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
var reverseList = function (head) {
  // 이전 값을 저장하고 이전값을 next로 갱신해준다.

  // 마지막 도달 값은 null이여야 함으로 이전값을 null로 설정해준다.
  let prev = null;

  // 현재 순회하고 있는 노드를 기억하기 위한 curr 변수
  let curr = head;

  // curr의 변수가 null에 도달했다는것은 기존 링크드 리스트의 마지막에 도달했다는것이므로 순회를 종료해준다.
  while (curr !== null) {
    // 현재 노드의 다음 값을 기억하기 위한 변수.
    let next = curr.next;
    // curr의 다음값을 기존에 기억하고 있던 prev 변수를 가르키게 하고
    curr.next = prev;
    // prev값을 현재 순회하고 있던 curr값으로 바꿔준다.
    prev = curr;
    // 다음 순회를 이어나가기 위해 다음 노드를 가르켰던 next 변수를 curr값과 바꿔준다.
    curr = next;
  }

  // 순회를 한바퀴 다 돌고나면 prev에 담아져 있는 node들은 기존 원본 링크드 리스트의 반대를 가르키고 있으므로 reversed한 링크드 리스트를 리턴할수 있다.
  return prev;
};
