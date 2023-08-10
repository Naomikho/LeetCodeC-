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
class Height {
  h: number;
  constructor() {
    this.h = 0;
  }
}

function isBalanced(root: TreeNode | null): boolean {
     function checkBalanced(root: TreeNode | null, h: Height): boolean {
         if (!root) 
         {
             h.h = 0;
             return true;
         }

         const lh = new Height();
         const rh = new Height();

         const leftBal = checkBalanced(root.left, lh);
         const rightBal = checkBalanced(root.right, rh);

         h.h = Math.max(lh.h, rh.h) + 1;

         if (leftBal && rightBal && (Math.abs(lh.h - rh.h) <= 1)) return true;

         return false;
     }

     const height = new Height();
     return checkBalanced(root, height);
};
