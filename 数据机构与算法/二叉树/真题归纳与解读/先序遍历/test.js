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
//  树的先序遍历
const preorderTraversal = function (root) {
    const res = []
    if (!root) {
        return res
    }
    const stack = []
    stack.push(root)
    // 迭代法，非递归求解
    while (stack.length) {
        // 栈顶元素先出
        const top = stack.pop()
        // 放入数组，先序遍历的顺序
        res.push(top.val)
        if (top.right) {
            stack.push(top.right)
        }
        if (top.left) {
            stack.push(top.left)
        }
    }
}
