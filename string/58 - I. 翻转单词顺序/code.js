/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    if (!s) return s
    if (/^\s+$/.test(s)) return ''
    const arr = s.match(/\S+/g)
    return arr.reverse().join(' ')
}
// console.log(reverseWords('the sky is blue'))
// console.log(reverseWords('hello world!'))
// console.log(reverseWords('a good   example'))
console.log(reverseWords(' '))
