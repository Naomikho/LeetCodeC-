/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return null;
    if (!head.next) return head;
    
    let lastNode = head, nextNode = head.next;
    lastNode.next = null;

    while(nextNode != null)
    {
        let temp = nextNode;
        nextNode = nextNode.next;
        temp.next = lastNode;
        lastNode = temp;
    }

    return lastNode;
};
