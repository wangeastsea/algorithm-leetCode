// 冷冻： 题意没法理解
/** 获取引用指数
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    // 首先进行排序
    citations.sort((a, b) => a - b)
    const length = citations.length
    if (!length) return 0
    if (length === 1 && citations[0] !== 0) {
        return 1
    }
    if (length === 1 && citations[0] === 0) {
        return 0
    }
    let h
    for (let i = 0; i < length; i++) {
        // 使得当前值的大小（被引用次数) 等于包含当前值的后续数组的长度。
        if (citations[i] === length - i) {
            h = citations[i]
            break
        } else {
            h = 0
        }
    }
    return h
}

console.log(hIndex([0, 0]))
