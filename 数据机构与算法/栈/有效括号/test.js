const leftToRight = {
    '(': ')',
    '[': ']',
    '{': '}',
}
const isValid = function (s) {
    if (!s) return true
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const cur = s[i]
        if (['(', '[', '{'].includes(cur)) {
            stack.push(leftToRight[cur])
        } else {
            // const stackTop = stack[stack.length - 1]
            // if (stackTop !== s[i]) {
            //     return false
            // } else {
            //     stack.pop()
            // }
            // 这里的思路好好斟酌下。
            if (!stack.length || stack.pop() !== cur) {
                return false
            }
        }
    }
    return !stack.length
}

console.log(isValid('()[]{}'))
