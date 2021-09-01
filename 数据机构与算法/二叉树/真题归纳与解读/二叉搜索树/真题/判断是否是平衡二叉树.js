// 从下往上递归遍历树中的每一个结点，计算其左右子树的高度并进行对比，
// 只要有一个高度差的绝对值大于1，那么整棵树都会被判为不平衡。
const isBalanced = function (root) {
    let flag = true
    function dfs(root) {
        if (!root || !flag) {
            return 0
        }
        const left = dfs(root.left)
        const right = dfs(root.right)
        if (Math.abs(left - right) > 1) {
            flag = false
            return 0
        }
        return Math.max(left, right) + 1
    }
    dfs(root)
    return flag
}
