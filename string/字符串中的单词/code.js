/**
 * @param {string} s
 * @return {number}
 */

// 思路详解：
// 首先是根据空格切分成数组，判断数组中的每个元素是不是true(因为有空格的存在),
// 维护一个全局计数器,判断如果是true，计数器加1，最后直接返回计数器，就是单词数的数量。
// 1
// var countSegments = function (s) {
//     const strArr = s.split(' ')
//     let c = 0
//     for (const e of strArr) {
//         if (e) c++
//     }
//     return c
// }

// 2 match 实现  \S+ 非空格
var countSegments = function (s) {
    const strArr = s.match(/\S+/g)
    return strArr ? strArr.length : 0
}

console.log(countSegments("love live! mu'sic forever"))
// console.log(countSegments(''))
// console.log(countSegments('     '))
