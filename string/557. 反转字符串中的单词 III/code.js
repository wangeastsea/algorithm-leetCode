/**
 * @param {string} s
 * @return {string}
 */

// 思路：
// 1：将输入的字符串用空格切分成数组，然后通过操作每一项，进行反转。
// 2: 反转之后，进行数组的拼接。

// 以下3钟方法思路全部一样，写法不一样，渐进优化

// 1
// var reverseWords = function (s) {
//     const arr = s.split(' ')
//     const val = arr.map((item) => {
//         return item.split('').reverse().join('')
//     })
//     let str = ''
//     for (let i = 0; i < val.length; i++) {
//         if (i === val.length - 1) {
//             str += val[i]
//         } else {
//             str += val[i] + ' '
//         }
//     }
//     return str
// }

// 2
// var reverseWords = function (s) {
//     const arr = s.split(' ')
//     const val = arr.map((item) => {
//         return item.split('').reverse().join('')
//     })
//     // 直接使用api拼接效率更高
//     return val.join(' ')
// }

// 3
var reverseWords = function (s) {
    const arr = s.split(' ')
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            str += arr[i].split('').reverse().join('')
        } else {
            str += arr[i].split('').reverse().join('') + ' '
        }
    }
    return str
}
console.log(reverseWords("Let's take LeetCode contest"))

function transNum(infoEditStatus) {
    let sum = 1
    for (let i = 1; i <= 6; i++) {
        // 当前完成第几位
        if ((infoEditStatus & sum) === 0) {
            return i
        }
        sum *= 2
    }
}
const a = transNum(31)
console.log(a)
