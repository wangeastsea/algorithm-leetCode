/**
 * @param {string} s
 * @return {string}
    思路就是：通过replace把空格替换为%20
 */
var replaceSpace1 = function (s) {
    return s.replace(/\s/g, '%20')
}

const replaceSpace2 = function (s) {
    return s.split(' ').join('%20')
}
const s = 'We are happy.'
console.log(replaceSpace2(s))
