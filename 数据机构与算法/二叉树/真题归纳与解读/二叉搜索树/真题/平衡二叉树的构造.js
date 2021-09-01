// 1 先完成二叉树的中序遍历
// 2 将排序树组转化为平衡二叉树
class TreeNode {
    constructor(n) {
        this.val = n
        this.left = null
        this.right = null
    }
}
const balanceBST = function (root) {
    const nums = []
    function inorder(root) {
        if (!root) {
            return 0
        }
        inorder(root.left)
        nums.push(root.val)
        inorder(root.right)
    }
    function buildAVL(low, high) {
        if (low > high) {
            return null
        }
        const mid = Math.floor(low + (hight - low) / 2)
        const cur = new TreeNode(nums[mid])
        cur.left = buildAVL(low, mid - 1)
        cur.right = buildAVL(mid + 1, high)
        return cur
    }
    inorder(root)
    return buildAVL(0, nums.lenght - 1)
}
