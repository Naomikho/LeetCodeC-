class Height {
  h: number;
  constructor() {
    this.h = 0;
  }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  function diameterOpt(root: TreeNode | null, height: Height): number {
    if (!root) {
      height.h = 0;
      return 0;
    }

    const lh: Height = new Height();
    const rh: Height = new Height();

    const ldiameter: number = diameterOpt(root.left, lh);
    const rdiameter: number = diameterOpt(root.right, rh);

    height.h = Math.max(lh.h, rh.h) + 1;

    return Math.max(lh.h + rh.h, Math.max(ldiameter, rdiameter));
  }

  const height: Height = new Height();
  return diameterOpt(root, height);
}
