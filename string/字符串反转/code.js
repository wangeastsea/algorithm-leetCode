/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const arr1 = ['h', 'e', 'l', 'l', 'o']
const arr2 = ['H', 'a', 'n', 'n', 'a', 'h']
// 1
// var reverseString = function (s) {
//     const length = s.length
//     for (let i = 0; i < length; i++) {
//         // 奇数的情况下
//         if (i === length - i - 1) {
//             return
//         }
//         const tmp = s[i]
//         s[i] = s[length - i - 1]
//         s[length - i - 1] = tmp
//         // 偶数的情况下，其实就是判断如果最后2个元素是相邻的，就直接结束
//         if (i + 1 === length - i - 1) {
//             return
//         }
//     }
// }

// 2
var reverseString = function (s) {
    let left = 0
    let right = s.length - 1
    while (left < right) {
        ;[s[left], s[right]] = [s[right], s[left]]
        left++
        right--
    }
}
reverseString(arr1)
console.log(arr1)
reverseString(arr2)
console.log(arr2)
