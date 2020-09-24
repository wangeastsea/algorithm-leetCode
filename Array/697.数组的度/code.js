/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    const map = new Map()
    let distance = nums.length
    let maxSize = 1
    // 求出最大度数的元素
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1)
        } else {
            map.set(nums[i], map.get(nums[i]) + 1)
        }
        maxSize = Math.max(maxSize, map.get(nums[i]))
    }
    const amap = new Map()
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i]
        amap.set(cur, amap.has(cur) ? amap.get(cur) + 1 : 1)
        if (amap.get(cur) === maxSize) {
            distance = Math.min(distance, i - nums.indexOf(cur) + 1)
        }
    }
    console.log('amap', amap)
    return distance
}
console.log(findShortestSubArray([1, 2, 2, 3, 1]))
