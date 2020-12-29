const leftToRight = {
    '(': ')',
    '[': ']',
    '{': '}',
}

const str = '()[]{1'
function isValid(str) {
    const len = str.length
    const stack = []
    for (let i = 0; i < len; i++) {
        const ch = str[i]
        if (['[', '(', '{'].includes(ch)) {
            stack.push(leftToRight[ch])
        } else {
            if (ch !== stack.pop()) {
                return false
            }
        }
    }
    // 如果全部匹配完毕，栈应该是空的
    return !stack.length
}

console.log(isValid(str))
