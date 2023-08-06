function diameterOfBinaryTree(root: TreeNode | null): number {
    function height(node: TreeNode | null): number {
        if (!node) return 0;

        return 1 + Math.max(height(node.left), height(node.right));
    }

    if (!root) return 0;

    const lh = height(root.left);
    const rh = height(root.right);

    const ld = diameterOfBinaryTree(root.left);
    const rd = diameterOfBinaryTree(root.right);

    return Math.max(ld, rd, (lh + rh))
};
