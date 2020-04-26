/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
 * 输入: "abab"
 * 输出: True
 */

// 构思思路
// 通过正则的匹配的思路来解决
// var repeatedSubstringPattern = function (s) {
//     return /^(\w+)\1+/.test(s)
// }

// 将原字符串给出拷贝一遍组成新字符串；
// 掐头去尾留中间；
// 如果还包含原字符串，则满足题意。
var repeatedSubstringPattern = function (s) {
    return (s + s).slice(1, -1).includes(s)
}
console.log(repeatedSubstringPattern(''))
