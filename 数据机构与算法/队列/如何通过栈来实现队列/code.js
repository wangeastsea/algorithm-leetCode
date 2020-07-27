// 我们通过2个栈来模仿队列

const MyQueue = function () {
    this.stack1 = []
    this.stack2 = []
}

MyQueue.prototype.push = function (x) {
    this.stack1.push(x)
}

MyQueue.prototype.pop = function () {
    if (this.stack2.length <= 0) {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2.pop()
}

// 返回队列首部元素
MyQueue.prototype.peek = function () {
    if (this.stack2.length <= 0) {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    const stack2Len = this.stack2.length
    return stack2Len && this.stack2[stack2Len - 1]
}

MyQueue.prototype.empty = function () {
    return !this.stack2.length && !this.stack1.length
}
