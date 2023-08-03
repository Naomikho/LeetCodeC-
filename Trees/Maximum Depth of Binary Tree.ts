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

function maxDepth(root: TreeNode | null): number {
    return traverseTree(root, 0);
};

function traverseTree(node: TreeNode | null, depth: number): number {

    if(!node) return depth;

    const left = traverseTree(node.left, 1 + depth);
    const right = traverseTree(node.right, 1 + depth);

    return Math.max(left, right);
}
