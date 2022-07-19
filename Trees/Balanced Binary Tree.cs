/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
 
public class Solution {
     //isn't just balancing the left and right trees. It is performing the same check for every node
    public bool IsBalanced(TreeNode root) {
        if (root == null) return true;
        
        int left = dfs(root.left);
        int right = dfs(root.right);
        int diff = Math.Abs(left - right);
        if (diff > 1) 
        {
            return false;
        }
        if (!IsBalanced(root.left) || !IsBalanced(root.right)) return false;
        
        return true;

    }
    
    public int dfs(TreeNode node){
        if (node == null) return 0;
        return 1 + Math.Max(dfs(node.left),dfs(node.right));
    }
}
