/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// 思路为： 遍历ransomNote的每一个元素，判断是否在magazine中
// 如果在： 就删除magazine此下标的元素，就是为了实现杂志字符串中的每个字符只能在赎金信字符串中使用一次，如果不在，就直接返回false
// var canConstruct = function (ransomNote, magazine) {
//     if (ransomNote === '') {
//         return true
//     }
//     let bool = true
//     for (let i = 0; i < ransomNote.length; i++) {
//         if (magazine.includes(ransomNote[i])) {
//             const magazineArr = magazine.split('')
//             // 获取在magazine的下标
//             const index = magazineArr.indexOf(ransomNote[i])
//             // 删除magazine的index的元素
//             magazineArr.splice(index, 1)
//             magazine = magazineArr.join('')
//         } else {
//             bool = false
//         }
//     }
//     return bool
// }

var canConstruct = function (ransomNote, magazine) {
    if (ransomNote === '') {
        return true
    }
    const ransomNoteArr = ransomNote.split('')
    const magazineArr = magazine.split('')
    const len = ransomNoteArr.length
    let i = 0
    while (i < len) {
        // 判断每一个ransomNote元素是否在magazine中
        var index = magazineArr.indexOf(ransomNoteArr[i])
        // 如果在
        if (index > -1) {
            // 则将其赋值为一个特殊的字符，不局限为0
            magazineArr[index] = 0
            i++
            // 关键点判断，如果是ransomNote i+1 的长度 === len,说明已经比较到了最后一个字符都在magazine中，可以返回true
            if (i === len) {
                return true
            }
        } else {
            return false
        }
    }
}

// var canConstruct = function (ransomNote, magazine) {
//     if (ransomNote === '') {
//         return true
//     }
//     const ranArr = ransomNote.split('')
//     const magArr = magazine.split('')
//     for (let i = 0; i < ranArr.length; i++) {
//         const index = magArr.indexOf(ranArr[i])
//         if (index > -1) {
//             magArr[index] = '0'
//             if (i === ranArr.length - 1) {
//                 return true
//             }
//         } else {
//             return false
//         }
//     }
// }

console.log(canConstruct('a', 'b'))
console.log(canConstruct('aa', 'ab'))
console.log(canConstruct('aa', 'aab'))
