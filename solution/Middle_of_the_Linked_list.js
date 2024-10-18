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
var middleNode = function(head) {
    let p1=head, p2=head;
    while(p1 != null && p1.next != null){
        p2=p2.next;
        p1=p1.next.next;
    }
    return p2;
};