// stack [0,1,1,0] 存贮的下标的栈
// arr [1,1,0,4,0] 存贮大于本天的索引
// T 原始比较数组
function dailyTemperatures(T) {
    const stack = []
    const len = T.length
    const arr = Array(len).fill(0)
    for (let i = 0; i < len; i++) {
        if (stack.length > 0) {
            // 出栈入栈
            while (T[i] > T[stack[stack.length - 1]]) {
                const top = stack.pop()
                arr[top] = i - top
            }
            stack.push(i)
        } else {
            stack.push(i)
        }
    }
    return arr
}
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))

// [75,76]
