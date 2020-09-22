/**
 * @param {number[]} nums
 * @return {number}
 */

// 时间复杂度是O(n)
var findMaxConsecutiveOnes1 = function (nums) {
    const len = nums.length
    let max = 0
    let array = []
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            array.push(1)
        } else if (nums[i] === 0) {
            // 为0
            if (array.length > max) {
                max = array.length
            }
            array = []
        }
    }
    // 如果结尾是1，则在这里处理
    if (array.length > 0) {
        if (array.length > max) {
            max = array.length
        }
        array = []
    }
    return max
}
var findMaxConsecutiveOnes2 = function (nums) {
    const filterNums = nums
        .toString()
        .replace(/,/g, '')
        .split(0)
        .map((item) => {
            return item.length
        })

    nums = filterNums.sort((a, b) => {
        return a - b
    })
    return nums[nums.length - 1]
}
// leetcode 一个解答，跟我以上使用的方法很像，但是比我的简洁，这里拿来参考下
var findMaxConsecutiveOnes3 = function (nums) {
    const nString = nums.join('')
    const nArry = nString.split(0)
    // TODO 抽空研究下 sort
    const lastPop = nArry.sort().pop()
    const ln = lastPop.length
    return ln
}

console.log(
    findMaxConsecutiveOnes3([
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
    ])
)
