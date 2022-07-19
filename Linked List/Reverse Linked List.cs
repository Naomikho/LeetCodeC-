/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

public class Solution {
    public ListNode ReverseList(ListNode head) {
        if (head == null || head.next == null)
            return head;
        
				//we need to store the next next as well, if not when next becomes curr we cant access it
        ListNode curr = head,
                 next = curr.next,
                 next2 = next.next;
        
        curr.next = null;
        
        while (next != null)
        {
						//reverse the direction, next -> curr
            next.next = curr;
            
						//move forward since next is alr processed
            curr = next;
            next = next2;
            
						//after swapping, check if it is null then assign the next next node
            if (next != null)
                next2 = next.next;
        }
        
        return curr;
    }
}
