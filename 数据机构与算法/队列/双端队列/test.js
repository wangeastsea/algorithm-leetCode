// 题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]
/**
 *  1 [3 -1 -3] 5 3 6 7
    1 3 [-1 -3 5] 3 6 7
    1 3 -1 [-3 5 3] 6 7
    1 3 -1 -3 [5 3 6] 7
    1 3 -1 -3 5 [3 6 7]
 *  3 3 5 5 6 7
    提示：你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
 */
const nums = [1, 3, -1, -3, 5, 3, 6, 7]
// 方法一： 双指针解法 K 是窗口大小
const maxSlidingWindow = function (nums, k) {
    const windowMax = []
    // 定义初始指针
    let start = 0
    let end = k - 1
    while (end <= nums.length - 1) {
        const max = getMax(nums, start, end)
        windowMax.push(max)
        start++
        end++
    }
    return windowMax
}

function getMax(nums, start, end) {
    let max = nums[start]
    for (let i = start; i <= end; i++) {
        if (nums[i] > max) {
            max = nums[i]
        }
    }
    return max
}

console.log(maxSlidingWindow(nums, 3))
