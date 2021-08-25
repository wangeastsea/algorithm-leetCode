/**
 *  题目描述：给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 *  示例: 输入: n = 4, k = 2
    输出: [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
 *
 * /
 回溯算法的基本思想是：从一条路往前走，能进则进，不能进则退回来，换一条路再试。 ——LeetCode
 我们重点关注这句话：“回溯算法的基本思想是：从一条路往前走，能进则进，不能进则退回来，换一条路再试。”   
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
    // 初始化结果数组
    const res = []
    // 初始化组合数组
    const subset = []
    // 进入 dfs，起始数字是1
    dfs(1)

    // 定义 dfs 函数，入参是当前遍历到的数字
    function dfs(index) {
        if (subset.length === k) {
            res.push(subset.slice())
            return
        }
        // 从当前数字的值开始，遍历 index-n 之间的所有数字
        for (let i = index; i <= n; i++) {
            // 这是当前数字存在于组合中的情况
            subset.push(i)
            // 基于当前数字存在于组合中的情况，进一步 dfs
            dfs(i + 1)
            // 这是当前数字不存在与组合中的情况
            subset.pop()
        }
    }
    // 返回结果数组
    return res
}
console.log(combine(4, 2))
