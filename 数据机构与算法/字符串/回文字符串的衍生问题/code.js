// 双指针解法
function isHuiwen(sourceStr) {
    let sIndex = 0
    let eIndex = sourceStr.length - 1
    // 当左右指针都满足条件时，一起向中间靠拢
    while (sIndex < eIndex && sourceStr[sIndex] === sourceStr[eIndex]) {
        sIndex++
        eIndex--
    }
    if (isPalindrome(sIndex + 1, eIndex)) {
        return true
    }
    if (isPalindrome(sIndex, eIndex--)) {
        return true
    }
    // 判断是否是回文的方法
    function isPalindrome(st, ed) {
        while (st <= ed) {
            if (sourceStr[st] !== sourceStr[ed]) {
                return false
            }
            st++
            ed--
        }
        return true
    }
    return false
}

// 判断一个字符串是不是回文的方法
function isPalindrome(str) {
    // 缓存字符串的长度
    const len = str.length
    // 遍历前半部分，判断和后半部分是否对称
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]) {
            return false
        }
    }
    return true
}
