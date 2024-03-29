/**
 * 题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
    说明：解集不能包含重复的子集。
 * 
    示例: 输入: nums = [1,2,3]
    输出:
    [
    [3],
    [1],
    [2],
    [1,2,3],
    [1,3],
    [2,3],
    [1,2],
    []
    ]
 */
// 入参是一个数组
const subsets = function (nums) {
    // 初始化结果数组
    const res = []
    // 缓存数组长度
    const len = nums.length
    // 初始化组合数组
    const subset = []
    // 进入 dfs
    dfs(0)

    // 定义 dfs 函数，入参是 nums 中的数字索引
    function dfs(index) {
        // 每次进入，都意味着组合内容更新了一次，故直接推入结果数组
        res.push(subset.slice())
        // 从当前数字的索引开始，遍历 nums
        for (let i = index; i < len; i++) {
            // 这是当前数字存在于组合中的情况
            subset.push(nums[i])
            // 基于当前数字存在于组合中的情况，进一步 dfs
            dfs(i + 1)
            // 这是当前数字不存在与组合中的情况
            subset.pop()
        }
    }
    // 返回结果数组
    return res
}
const num = [1, 2, 3]
console.log(subsets(num))
