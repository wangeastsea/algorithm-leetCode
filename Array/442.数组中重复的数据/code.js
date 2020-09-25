/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    const len = nums.length
    const map = new Map()
    const arr = []
    for (let i = 0; i < len; i++) {
        map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1)
        if (map.get(nums[i]) > 1) {
            arr.push(nums[i])
        }
    }
    return arr
}

var findDuplicates2 = function (nums) {
    nums.sort((a, b) => a - b)
    const arr = []
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            arr.push(nums[i])
        }
    }
    return arr
}

// 利用符号实现“原地”哈希
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates3 = function (nums) {
    const res = []
    for (let i = 0; i < nums.length; ++i) {
        const index = Math.abs(nums[i]) - 1
        if (nums[index] < 0) {
            res.push(Math.abs(nums[i]))
        }
        // 取反
        nums[index] = -nums[index]
    }
    return res
}
console.log(findDuplicates3([4, 3, 2, 7, 8, 2, 3, 1]))
