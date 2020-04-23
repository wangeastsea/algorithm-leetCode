/**
 * @param {number} num
 * @return {number}
 */

/**
解题思路：
 1：首先要判断递归截止条件
 2：递归的每一步需要做什么
 3：一点不要忘记return 递归函数
*/

// var addDigits = function (num) {
//     const numArr = num.toString().split('')
//     // 这是递归截止条件
//     if (numArr.length === 1) {
//         return num
//     }
//     let total = 0
//     // 拆分递归步骤
//     numArr.forEach((item) => {
//         total += parseInt(item)
//     })
//     return addDigits(total)
// }

// 不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗
// 参考了 https://leetcode-cn.com/problems/add-digits/solution/o1jie-fa-can-kao-jiao-you-jie-fa-hou-dui-suan-fa-s/
// var addDigits = function (num) {
//     return ((num - 1) % 9) + 1
// }

// 暂时没有搞懂，先用递归处理吧
var addDigits = function (num) {
    if (num % 9 === 0 && num !== 0) {
        return 9
    }
    return num % 9
}

console.log(addDigits(38))
