/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// 输入: haystack = "hello", needle = "ll"
// 输出: 22
// 1 直接使用api 有种胜之不武的赶脚
// var strStr = function (haystack, needle) {
//     return haystack.indexOf(needle)
// }

// 2
// 思路： 通过replace方法，将haystack中的needle全部替换成一个特殊字符$,然后循环计算$出现的位置即可，如果找不到就返回-1
var strStr = function (haystack, needle) {
    if (!needle) return 0
    const reg = new RegExp(`${needle}`, 'g')
    const a = haystack.replace(reg, '$')
    for (let i = 0; i < a.length; i++) {
        if (a[i] === '$') {
            return i
        }
    }
    return -1
}

// console.log(strStr('hello', 'll'))
// console.log(strStr('a', 'a'))
// console.log(strStr('aaa', 'aa'))
console.log(strStr('aaa', ''))
