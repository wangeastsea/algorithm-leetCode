// `大写字符` A-Z 对应的是 65 - 90
// `小写字符` a-z 对应的是 97 - 122
// A 与 a 的数值位差为 32
// 使用 char.charCodeAt() 拿到字符 char 对应的数值 strNum
// 使用 String.fromCharCode(strNum + 数值位差) 拿到对应的 `小写字符`

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    const reg = /(^[A-Z]+$)|(^[A-Z]{1}[a-z]+$)|(^[a-z]+$)/
    return reg.test(word)
}

// console.log(detectCapitalUse('FlaG'))
console.log(detectCapitalUse('ag'))

// 分两种情况
//
// 当第一个字符是大写时，后面的所有字符必须一致(都是大写，或者都是小写)
// 第一个字符不是大写时，整个字符串必须一致(都是小写)
// 代码
// var detectCapitalUse = function(word) {
//     let n = word.length;
//
//     if (n <= 1) return true;
//     let first = word[0];
//
//     return first.toUpperCase() == first ? help(word.substring(1)) : help(word);
// };
// // 判断字符中是否全部都是某一种写法
// function help(s) {
//     let upper = s.toUpperCase() == s;
//     let lower = s.toLowerCase() == s;
//
//     return upper || lower;
// }
