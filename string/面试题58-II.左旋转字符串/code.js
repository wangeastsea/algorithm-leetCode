/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
// 思路： 转化为数组的方案
// var reverseLeftWords = function (s, n) {
//     const arr = s.split('')
//     const sp = arr.splice(0, n)
//     const r = [...arr, ...sp]
//     return r.join('')
// }

// 思路： 直接操作字符串
var reverseLeftWords = function (s, n) {
    const sb = s.substr(0, n)
    const sf = s.substr(n)
    return sf + sb
}
console.log(reverseLeftWords('abcdefg', 2))
