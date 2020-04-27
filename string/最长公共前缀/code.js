/**
 * @param {string[]} strs
 * @return {string}
 */

// 输入: ["flower","flow","flight"]
// 输出: "fl"
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0]
    let pre = ''
    for (let i = 0; i < strs.length; i++) {
        const curS = strs[i]
        const nextS = strs[i + 1]
        let j = 0
        let z = 0
        // 前2个的比较逻辑
        if (i === 0) {
            while (j < curS.length) {
                if (curS[j] === nextS[j]) {
                    pre += curS[j]
                }
                j++
            }
        } else {
            while (z < pre.length) {
                // 此处多比较一次
                if (pre[z] !== curS[z]) {
                    pre = pre.substring(0, z)
                    break
                }
                z++
            }
        }
    }
    return pre
}

// console.log(longestCommonPrefix(['flower', 'flow', 'flewht']))

console.log(longestCommonPrefix(['dog', 'racecar', 'car']))
