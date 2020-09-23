/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const len = nums.length
    nums.sort()
    console.log(nums)
    // 重复出现的整数
    let repeat = 0
    let lost = 0
    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            repeat = nums[i]
            break
        }
    }
    // 如何找到丢失的整数
    for (let i = 0; i < nums.length; i++) {
        if (!nums.includes(i + 1)) {
            lost = i + 1
            break
        }
    }
    return [repeat, lost]
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */

console.log(findErrorNums([1, 5, 3, 2, 2, 7, 6, 4, 8, 9]))
