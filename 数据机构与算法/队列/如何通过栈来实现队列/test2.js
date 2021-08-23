// stack 模拟 queue

// push， top, pop

// 用栈实现队列，说白了就是用栈实现先进先出的效果，再说直接点，
// 就是想办法让栈底的元素首先被取出，也就是让出栈序列被逆序。
class MyQueue {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }

    push(x) {
        this.stack.push1(x)
    }

    // 队列首部移除元素。
    pop() {
        if (this.stack2.length > 0) {
            return this.stack2.pop()
        } else {
            while (this.stack1.length > 0) {
                const top = this.stack1.pop()
                this.stack2.push(top)
            }
            return this.stack2.pop()
        }
    }

    peek() {
        if (this.stack2.length > 0) {
            return this.stack2[this.stack2.length - 1]
        } else {
            while (this.stack1.length > 0) {
                const top = this.stack1.pop()
                this.stack2.push(top)
            }
            return this.stack2[this.stack2.length - 1]
        }
    }

    empty() {
        return !this.stack1.length && !this.stack2.length
    }
}
