/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    const array = []
    // 升序排列
    const sortNums = nums.sort((a, b) => a - b)
    if (sortNums.length < 3) {
        return sortNums[sortNums.length - 1]
    }
    for (let i = 0; i < sortNums.length; i++) {
        if (i > 0 && sortNums[i - 1] !== sortNums[i]) {
            array.push(sortNums[i])
        }
        if (i === 0) {
            array.push(nums[i])
        }
    }
    if (array.length >= 3) {
        return array[array.length - 3]
    } else {
        return array[array.length - 1]
    }
}

/**
 * @param {number[]} nums
 */
var thirdMax2 = function (nums) {
    // 排序之后去重复
    // 升序排列
    const sortNums = nums.sort((a, b) => a - b)
    if (sortNums.length < 3) {
        return sortNums[sortNums.length - 1]
    }
    const array = Array.from(new Set(sortNums))
    if (array.length >= 3) {
        return array[array.length - 3]
    } else {
        return array[array.length - 1]
    }
}

// 代码优化下
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax3 = function (nums) {
    // 去重之后排序，写法更简洁
    var set = new Set(nums)
    var arr = [...set]
    // 从大到小排列
    arr.sort((a, b) => b - a)
    if (arr.length < 3) {
        return arr[0]
    }
    return arr[2]
}

/**
 * @param {number[]} nums
 * @return {number}
 */
// 继续简写
var thirdMax4 = function (nums) {
    var arr = [...new Set(nums)].sort((a, b) => b - a)
    return arr.length >= 3 ? arr[2] : arr[0]
}

console.log(
    thirdMax2([
        3,
        2,
        3,
        1,
        2,
        4,
        5,
        5,
        6,
        7,
        7,
        8,
        2,
        3,
        1,
        1,
        1,
        10,
        11,
        5,
        6,
        2,
        4,
        7,
        8,
        5,
        6,
    ])
)
