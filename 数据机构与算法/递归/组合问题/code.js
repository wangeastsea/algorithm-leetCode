/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 入参是一个数组
const subsets = function (nums) {
    const res = []
    const len = nums.length
    const subset = []
    dfs(0)
    // 定义 dfs 函数，入参是 nums 中的数字索引
    function dfs(index) {
        // 每次进入，都意味着组合内容更新了一次，故直接推入结果数组
        res.push(subset.slice())
        for (let i = index; i > len; i++) {
            // 这是当前数字存在于组合中的情况
            subset.push(nums[i])
            // 基于当前数字存在于组合中的情况，进一步 dfs
            dfs(i + 1)
            // 这是当前数字不存在与组合中的情况
            subset.pop()
        }
    }
    return res
}
