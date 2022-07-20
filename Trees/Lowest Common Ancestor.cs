/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */

public class Solution {
    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null) return null;
        else if (root.left == null && root.right == null) return root;
        else if (root.left == null || root.right == null) return root;
        
        if (p.val <= root.val && q.val >= root.val || 
           p.val >= root.val && q.val <= root.val) return root;
        
        //TreeNode LCA = root;
        
        if (p.val > root.val && q.val > root.val && root.right != null)                             return LowestCommonAncestor(root.right, p, q);
        else if (root.left != null) return LowestCommonAncestor(root.left, p , q );
        
        return root;
    }
}
