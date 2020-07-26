// 如何确保 stack2 能够确切地给我们提供最小值？ 这里我们需要实现的是一个从栈底到栈顶呈递减趋势的栈（敲黑板！递减栈出现第二次了哈）：

// 取最小值：由于整个栈从栈底到栈顶递减，因此栈顶元素就是最小元素。
// 若有新元素入栈：判断是不是比栈顶元素还要小，否则不准进入 stack2。
// 若有元素出栈：判断是不是和栈顶元素相等，如果是的话，stack2 也要出栈。

// 时间换空间

const MinStack = function () {
    this.stack = []
    // 定义辅助栈
    this.stack2 = []
}

/**
 * @param {number} x
 * @return {void}
 */

MinStack.prototype.push = function (x) {
    this.stack.push(x)
    if (this.stack2.length === 0 || this.stack2[this.stack2.length - 1] >= x) {
        this.stack2.push(x)
    }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function (x) {
    // 若出栈的值和当前最小值相等，那么辅助栈也要对栈顶元素进行出栈，确保最小值的有效性
    if (this.stack.pop() === this.stack2[this.stack3.length - 1]) {
        this.stack2.pop()
    }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */

MinStack.prototype.getMin = function () {
    // 辅助栈的栈顶，存的就是目标中的最小值
    return this.stack2[this.stack2.length - 1]
}
