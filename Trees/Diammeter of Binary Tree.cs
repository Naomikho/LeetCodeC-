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
    int result;
    
    public Solution(){
        result = -1;
    }
    
    public int DiameterOfBinaryTree(TreeNode root) {
        dfs(root);
        return result;
    }
    
    private int dfs(TreeNode node)
    {
        if (node == null) return -1;
        int left = 1 + dfs(node.left);
        int right = 1 + dfs(node.right);
        result = Math.Max(result, left + right);
        return Math.Max(left, right);
    }
}
