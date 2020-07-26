// getMin 要做的事情，是从一个栈里找出其中最小的数字。我们仍然是抛砖引玉，
// 先说一个大部分人都能想到的思路：

// 初始化一个最小值变量，它的初始值可以设一个非常大的数（比如 Infinity），
// 然后开始遍历整个栈。在遍历的过程中，如果遇到了更小的值，
// 就把最小值变量更新为这个更小的值。这样遍历结束后，我们就能拿到栈中的最小值了。
// 这个过程中，我们对栈进行了一次遍历，时间复杂度无疑是 O(n)。
/**
 * 初始化你的栈结构
 */
const MinStack = function () {
    this.stack = []
}

/**
 * @param {number} x
 * @return {void}
 */
// 栈的入栈操作，其实就是数组的 push 方法
MinStack.prototype.push = function (x) {
    this.stack.push(x)
}

/**
 * @return {void}
 */
// 栈的出栈操作，其实就是数组的 pop 方法
MinStack.prototype.pop = function () {
    this.stack.pop()
}

/**
 * @return {number}
 */
// 取栈顶元素，咱们教过的哈，这里我本能地给它一个边界条件判断（其实不给也能通过，但是多做不错哈）
MinStack.prototype.top = function () {
    if (!this.stack || !this.stack.length) {
        return
    }
    return this.stack[this.stack.length - 1]
}
/**
 * @return {number}
 */
// 按照一次遍历的思路取最小值
MinStack.prototype.getMin = function () {
    let minValue = Infinity
    const { stack } = this
    for (let i = 0; i < stack.length; i++) {
        if (stack[i] < minValue) {
            minValue = stack[i]
        }
    }
    return minValue
}
