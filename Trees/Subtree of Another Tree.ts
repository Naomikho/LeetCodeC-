/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!subRoot) return true;
    if (!root) return false;

    if (isSameTree(root, subRoot)) return true;

    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot));
    
    function isSameTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (!root && !subRoot) return true;
        else if (root == null || subRoot == null) return false;
        else
        {
            if (root.val != subRoot.val) return false;
            const isLeftEqual = isSameTree(root.left, subRoot.left);
            const isRightEqual = isSameTree(root.right, subRoot.right);

            return isLeftEqual && isRightEqual;
        } 
    }
};
