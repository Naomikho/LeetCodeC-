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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
     if (!list1 && !list2) return null;

    let start: ListNode | null = new ListNode();
    let curr: ListNode | null = new ListNode();

    while (list1 !== null && list2 !== null) {
        let temp: ListNode;

        // Compare both nodes
        if (list1.val <= list2.val) {
            temp = list1;
            list1 = list1.next;
        } else {
            temp = list2;
            list2 = list2.next;
        }

        if (!start.val && !start.next) {
            start = temp;
            curr = start;
        } else {
            curr!.next = temp;
            curr = temp;
        }
    }

    if (list1 !== null) {
        while (list1 !== null) {
            if (!start.val && !start.next) {
                start = list1;
                curr = start;
            } else {
                curr!.next = list1;
                curr = list1;
            }
            list1 = list1.next;
        }
    } else if (list2 !== null) {
        while (list2 !== null) {
            if (!start.val && !start.next) {
                start = list2;
                curr = start;
            } else {
                curr!.next = list2;
                curr = list2;
            }
            list2 = list2.next;
        }
    }

    return start;
};
