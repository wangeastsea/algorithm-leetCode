function dailyTemperatures(T) {
    const len = T.length
    const res = new Array(len).fill(0)
    const stack = []
    for (let i = 0; i < len; i++) {
        // 维护一个递减栈
        while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
            const top = stack.pop()
            res[top] = i - top
        }
        stack.push(i)
    }
    return res
}
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
