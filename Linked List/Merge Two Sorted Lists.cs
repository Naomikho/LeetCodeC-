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
    public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null && list2 == null) return null;
        
        ListNode start = new ListNode();
        ListNode curr = new ListNode();
        
        while(list1 != null && list2 != null)
        {
            ListNode temp;
            //compare both
            if (list1.val <= list2.val)
            {
                temp = list1;
                list1 = list1.next;
            }
            else
            {
                temp = list2;
                list2 = list2.next;
            }
            
            if (start.val == 0 && start.next == null)
            {
                start = temp;
                curr = start;
            }
            else
            {
                curr.next = temp;
                curr = temp;
            }

        }
        if (list1 != null) 
        {
            while(list1 != null) 
            {
                if (start.val == 0 && start.next == null) 
                {
                    start = list1;
                    curr = start;
                }
                else 
                {
                    curr.next = list1;
                    curr = list1;
                }
                list1 = list1.next;
            }
        }
        else if (list2 != null)
        {
            while(list2 != null) 
            {
                if (start.val == 0 && start.next == null)
                {
                    start = list2;
                    curr = start;
                }
                else 
                {
                    curr.next = list2;
                    curr = list2;
                }
                list2 = list2.next;
            }
        }
        
       return start;
    }
}
