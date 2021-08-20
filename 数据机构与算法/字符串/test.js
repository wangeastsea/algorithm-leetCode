/**
 *字符串翻转
 */
const str = 'love'
function reverse(str) {
    return str.split('').reverse().join('')
}
// console.log(reverse(str))

/**
 *  判断一个字符串是否是回文字符串
 * 'yessey'
 */
const str2 = 'yessey'
function isPalindrome(str) {
    return reverse(str) === str
}
// console.log(isPalindrome(str2))
/**
 * for
 */
function isPalindrome2(str) {
    const len = str.length
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false
        }
    }
    return true
}
// console.log(isPalindrome2(str2))

/**
 * 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 */
/**
 *  输入: "aba"
    输出: True
    示例 2:
    输入: "abca"
    输出: True
    解释: 你可以删除c字符。
    注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 */

const str3 = 'yysddyy'
const validPalindrome = function (str) {
    const len = str.length
    let s = 0
    let e = len - 1
    while (s < e && str[s] === str[e]) {
        s++
        e--
    }
    // 工具方法，用于判断字符串是否回文
    function isPalindrome3(st, ed) {
        while (st < ed) {
            if (str[st] !== str[ed]) {
                return false
            }
            st++
            ed--
        }
        return true
    }
    if (isPalindrome3(s + 1, e)) {
        return true
    }
    if (isPalindrome3(s, e - 1)) {
        return true
    }
    return false
}

const cc = validPalindrome(str3)
// console.log(cc)

/**
 * 
 *  void addWord(word)
    bool search(word)
    search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
    . 可以表示任何一个字母。
    addWord("bad")
    addWord("dad")
    addWord("mad")
    search("pad") -> false
    search("bad") -> true
    search(".ad") -> true
    search("b..") -> true
    说明:
    你可以假设所有单词都是由小写字母 a-z 组成的。
 */
/**
 * 构造函数
 */
const WordDictionary = function () {
    // 初始化一个对象字面量，承担 Map 的角色
    this.words = {}
}
WordDictionary.prototype.addWord = function (str) {
    if (this.words[str.length]) {
        this.words[str.length].push(str)
    } else {
        this.words[str.length] = []
    }
}

WordDictionary.prototype.search = function (str) {
    if (!this.words[str.length]) {
        return false
    }
    const len = str.length
    if (!str.includes('.')) {
        return this.words[len].includes(str)
    }
    const reg = new RegExp(str)
    return this.words[len].some((item) => reg.test(item))
}
/**
 * 请你来实现一个 atoi 函数，使其能将字符串转换成整数。
 */

const reg = /\s*([-+]?\d*).*/
str.match(reg)

const myAtoi = function (str) {
    const reg = /\s*([-+]?\d*).*/
    const groups = str.match(reg)
    const max = Math.pow(2, 31) - 1
    const min = -max - 1
    let targetNum = 0
    if (groups) {
        targetNum = +groups[1]
        if (isNaN(targetNum)) {
            targetNum = 0
        }
    }
    if (targetNum > max) {
        return max
    } else if (targetNum < min) {
        return min
    }
    return targetNum
}

/**
 * match 的用法
 */
var str5 = 'For more information, see Chapter 3.4.5.1'
var re = /see (chapter \d+(\.\d)*)/i
var found = str5.match(re)
console.log(found)

// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' 是整个匹配。
// 'Chapter 3.4.5.1' 被'(chapter \d+(\.\d)*)'捕获。
// '.1' 是被'(\.\d)'捕获的最后一个值。
// 'index' 属性(22) 是整个匹配从零开始的索引。
// 'input' 属性是被解析的原始字符串。

console.log(myAtoi('4193 with words'))
