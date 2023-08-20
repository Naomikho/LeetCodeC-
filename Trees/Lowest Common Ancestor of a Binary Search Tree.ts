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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (root == null) return null;
	let currLCA = root;
    if (p.val == root.val || q.val == root.val) return currLCA;
    const hi = p.val > q.val ? p : q;
    const lo = p.val < q.val ? p : q;

    if (hi.val > root.val && lo.val < root.val) return currLCA;
    else if (hi.val < root.val && lo.val < root.val)
    {
        currLCA = lowestCommonAncestor(root.left, p, q);
    }
    else
    {
        currLCA = lowestCommonAncestor(root.right, p, q);
    }

    return currLCA;
};
