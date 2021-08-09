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
MyQueue.prototype.peek = function () {
    if (this.stack2.length <= 0) {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    const len = this.stack2.length
    return len && this.stack2[len - 1]
}
MyQueue.prototype.empty = function () {
    return this.stack1.length === 0 && this.stack2.length === 0
}
