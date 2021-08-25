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
// 中序遍历 => 左 根 右
// 遍历题目，需要背诵
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
    // 定义结果数组
    const res = []
    // 初始化栈结构
    const stack = []
    // 用一个 cur 结点充当游标
    let cur = root
    // 当 cur 不为空、或者 stack 不为空时，重复以下逻辑
    while (cur || stack.length) {
        // 这个 while 的作用是把寻找最左叶子结点的过程中，途径的所有结点都记录下来
        while (cur) {
            // 将途径的结点入栈
            stack.push(cur)
            // 继续搜索当前结点的左孩子
            cur = cur.left
        }
        // 取出栈顶元素
        cur = stack.pop()
        // 将栈顶元素入栈
        res.push(cur.val)
        // 尝试读取 cur 结点的右孩子
        cur = cur.right
    }
    // 返回结果数组
    return res
}

console.log(inorderTraversal(root))
