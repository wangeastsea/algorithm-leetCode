/**
 * @param {TreeNode} root
 * @return {number[]}
 *
 *  1
  \
   2
  /
3
 */

const root = {
    val: '1',
    right: {
        val: '2',
        left: {
            val: '3',
        },
    },
}
// 先序遍历 => 根 左 右
// 后序遍历 => 左 右 根
const afterOrderTraversal = function (root) {
    const res = []
    if (!root) {
        return res
    }
    const stack = []
    stack.push(root)
    while (stack.length) {
        const top = stack.pop()
        res.unshift(top.val)
        if (top.right) {
            stack.push(top.right)
        }
        if (top.left) {
            stack.push(top.left)
        }
    }
}
