// 用一个 map 来维护左括号和右括号的对应关系
const leftToRight = {
    '(': ')',
    '[': ']',
    '{': '}',
}

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    // 结合题意，空字符串无条件判断为 true
    if (typeof s === 'string' && !s) {
        return true
    }
    const stack = []
    const len = s.length
    for (let i = 0; i < len; i++) {
        // 缓存单个字符
        const ch = s[i]
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(leftToRight[ch])
        } else {
            // 若栈不为空，且栈顶的左括号没有和当前字符匹配上，那么判为无效
            if (!stack.length || stack.pop() !== ch) {
                // 直接返回无效
                return false
            }
        }
    }
    // 若所有的括号都能配对成功，那么最后栈应该是空的
    return !stack.length
}

console.log(isValid('()[]{}'))
