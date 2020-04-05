// https://leetcode-cn.com/problems/two-sum/

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 第一种解法，时间复杂度为o(n^2)
function twoSum(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}
const nums = [2, 7, 11, 15]

const target = 9

console.log(twoSum(nums, target))

// 第二种解法

// function towSum (nums, target) {
//     nums.forEach((item, index) => {
//         let sNum = target - item
//         if（sNum > 0 ) {

//         }
//     })
// }
