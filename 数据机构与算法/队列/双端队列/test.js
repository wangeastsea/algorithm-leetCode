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
// const nums = [1, 3, -1, -3, 5, 3, 6, 7]
// 方法一： 双指针解法 K 是窗口大小
const maxSlidingWindow1 = function (nums, k) {
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

// console.log(maxSlidingWindow1(nums, 3))

// 双端队列解法
const nums = [1, 3, -1, -3, 2, 3, 6, 7]
// const nums = [1, 3, -1, -3, 5, 3, 6, 7]
const maxSlidingWindow = function (nums, k) {
    const arr = []
    // 前K个元素入队
    const dbQueue = []
    for (let i = 0; i < k; i++) {
        if (dbQueue.length > 0) {
            while (
                dbQueue.length >= 1 &&
                nums[i] >= nums[dbQueue[dbQueue.length - 1]]
            ) {
                // 尾部出队
                dbQueue.pop()
            }
            // 队列里放的是索引
            dbQueue.push(i)
        } else {
            dbQueue.push(i)
        }
    }
    arr.push(nums[dbQueue[0]])
    let slide = k - 1
    // 窗口开始移动
    while (slide < nums.length - 1) {
        slide++
        while (
            dbQueue.length >= 1 &&
            nums[slide] >= nums[dbQueue[dbQueue.length - 1]]
        ) {
            // 尾部出队
            dbQueue.pop()
        }
        dbQueue.push(slide)
        while (dbQueue[0] <= slide - k) {
            dbQueue.shift()
        }
        arr.push(nums[dbQueue[0]])
    }
    return arr
}

// console.log(maxSlidingWindow(nums, 3))

// 为什么用索引？
// 目的就是便于判断 dbQueen 里的索引是否已经超出滑动窗口的索引，如果超出了，全部从队头出队
const maxSlidingWindow2 = function (nums, k) {
    const dbQueen = []
    const arr = []
    const len = nums.length
    for (let i = 0; i < len; i++) {
        while (
            dbQueen.length > 0 &&
            nums[dbQueen[dbQueen.length - 1]] < nums[i]
        ) {
            dbQueen.pop()
        }
        dbQueen.push(i)
        while (dbQueen[0] <= i - k) {
            dbQueen.shift()
        }
        if (i >= k - 1) {
            arr.push(nums[dbQueen[0]])
        }
    }
    return arr
}
console.log(maxSlidingWindow2(nums, 3))
