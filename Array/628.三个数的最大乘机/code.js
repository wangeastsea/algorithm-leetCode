/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    const sortNums = nums.sort((a, b) => a - b)
    const len = sortNums.length
    let max1 = 0
    let max2 = 0
    if (sortNums[0] < 0 && sortNums[1] < 0) {
        max1 = sortNums[0] * sortNums[1] * sortNums[len - 1]
    }
    max2 = sortNums[len - 3] * sortNums[len - 2] * sortNums[len - 1]
    return Math.max(max1, max2)
}

// 简化一版
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct2 = function (nums) {
    nums.sort((a, b) => b - a)
    return Math.max(
        nums[0] * nums[1] * nums[2],
        nums[0] * nums[nums.length - 1] * nums[nums.length - 2]
    )
}
console.log(
    maximumProduct([
        -710,
        -107,
        -851,
        657,
        -14,
        -859,
        278,
        -182,
        -749,
        718,
        -640,
        127,
        -930,
        -462,
        694,
        969,
        143,
        309,
        904,
        -651,
        160,
        451,
        -159,
        -316,
        844,
        -60,
        611,
        -169,
        -73,
        721,
        -902,
        338,
        -20,
        -890,
        -819,
        -644,
        107,
        404,
        150,
        -219,
        459,
        -324,
        -385,
        -118,
        -307,
        993,
        202,
        -147,
        62,
        -94,
        -976,
        -329,
        689,
        870,
        532,
        -686,
        371,
        -850,
        -186,
        87,
        878,
        989,
        -822,
        -350,
        -948,
        -412,
        161,
        -88,
        -509,
        836,
        -207,
        -60,
        771,
        516,
        -287,
        -366,
        -512,
        509,
        904,
        -459,
        683,
        -563,
        -766,
        -837,
        -333,
        93,
        893,
        303,
        908,
        532,
        -206,
        990,
        280,
        826,
        -13,
        115,
        -732,
        525,
        -939,
        -787,
    ])
)
