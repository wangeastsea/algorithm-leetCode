/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const len = nums.length
    const arr = []
    for (let i = 0; i < len; i++) {
        if (!nums.includes(i + 1)) {
            arr.push(i + 1)
        }
    }
    return arr
}

var findDisappearedNumbers2 = function (nums) {
    const len = nums.length
    const arr = []
    for (let i = 0; i < len; i++) {
        arr[nums[i]] = true
    }
    const lost = []
    for (let j = 1; j <= len; j++) {
        !arr[j] && lost.push(j)
    }
    return lost
}
console.log(findDisappearedNumbers2([4, 3, 2, 7, 8, 2, 3, 1]))
