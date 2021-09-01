class TreeNode {
    constructor(n) {
        this.val = n
        this.left = null
        this.right = null
    }
}
const arr = [-10, -3, 0, 5, 9]
const sortedArrayToBST = function (nums) {
    if (!nums.length) {
        return null
    }
    const root = buildBST(0, nums.length - 1)
    function buildBST(low, high) {
        if (low > high) {
            return null
        }
        const mid = Math.floor(low + (high - low) / 2)
        const cur = new TreeNode(nums[mid])
        cur.left = buildBST(low, mid - 1)
        cur.right = buildBST(mid + 1, high)
        return cur
    }
    return root
}

console.log(sortedArrayToBST(arr))
