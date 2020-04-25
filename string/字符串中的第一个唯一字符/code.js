/**
 * @param {string} s
 * @return {number}
 */
// https://www.jianshu.com/p/378b95a1cbbe
/**
 * s = "leetcode"返回 0.
 * s = "loveleetcode",返回 2.
 */

// 1
// var firstUniqChar = function (s) {
//     if (!s) {
//         return -1
//     }
//     if (s.length === 1) {
//         return 0
//     }
//     let scopy = s
//     for (let i = 0; i < s.length; i++) {
//         const regStr = `${s[i]}`
//         const reg = new RegExp(regStr, 'g')
//         const numArr = scopy.match(reg)
//         if (!numArr) {
//             continue
//         }
//         const num = numArr.length
//         if (num > 1) {
//             scopy = scopy.replace(reg, '')
//         }
//         if (!scopy) {
//             return -1
//         }
//         if (num === 1) {
//             return i
//         }
//     }
//     return -1
// }

// 2
// var firstUniqChar = function (s) {
//     let cps = s
//     while (cps.length > 0) {
//         const r = new RegExp(cps[0], 'g')
//         const numArr = cps.match(r)
//         if (numArr.length === 1) {
//             return s.indexOf(cps[0])
//         } else {
//             cps = cps.replace(r, '')
//         }
//     }
//     return -1
// }

// 3

// var firstUniqChar = function (s) {
//     let i = 0
//     const obj = {}
//     while (i < s.length) {
//         const key = s[i]
//         if (key in obj) {
//             obj[s[i]]++
//         } else {
//             obj[s[i]] = 1
//         }
//         i++
//     }
//     for (const key in obj) {
//         if (obj[key] === 1) {
//             return s.indexOf(key)
//         }
//     }
//     return -1
// }

// 4 参考
// var firstUniqChar = function (s) {
//     const charSet = new Set()
//     for (let i = 0; i < s.length; i++) {
//         const nowChar = s[i]
//         if (charSet.has(nowChar)) continue
//         if (s.lastIndexOf(nowChar) === i) return i
//         charSet.add(nowChar)
//     }
//     return -1
// }

// 5 参考
var firstUniqChar = function (s) {
    // 26个小写字母
    const chars = 'abcdefghijklmnopqrstuvwxyz'

    // 初始化设置为一个较大的不可能的值，index最大为s.length-1,但是这里设置为s.length
    let index = s.length
    // 遍历所有字符
    for (const c of chars) {
        // 找到有且只出现一次的字符
        const start = s.indexOf(c)
        const last = s.lastIndexOf(c)
        if (start !== -1 && start === last) {
            // 获取index, start的最小值，并赋值于index，经过循环以后，如果有更小的值，则继续更新index,最终index的值一定是其中最小的
            index = Math.min(index, start)
        }
        if (index === 0) break
    }
    return index === s.length ? -1 : index
}

console.log(firstUniqChar('aaaab'))
// console.log(firstUniqChar('loveleetcode'))
// console.log(firstUniqChar('cc'))
// console.log(
//     firstUniqChar(
//         'jsoajiitgehfehbjhkolsbhmgrokomwaccejqshlbjejdtnjkalqvirthktxcqpllqcmchgbaxlrotmklhddgnqengnuwon'
//     )
// )
// console.log(firstUniqChar('adaadaad'))
