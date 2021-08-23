/**
 *  MinStack minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin(); --> 返回 -3.
    minStack.pop();
    minStack.top(); --> 返回 0.
    minStack.getMin(); --> 返回 -2.
 *
 *
 *
 */

// class MinStack {
//     constructor() {
//         this.minStack = []
//     }

//     // 返回栈顶的元素
//     top() {
//         if (!this.minStack || !this.minStack.length) {
//             return
//         }
//         return this.minStack[this.minStack.length - 1]
//     }

//     // 推入栈
//     push(num) {
//         this.minStack.push(num)
//     }

//     // 删除栈顶的元素, 并返回
//     pop() {
//         return this.minStack.pop()
//     }

//     // 检索栈中的最小元素的值
//     getMin() {
//         return Math.min(...this.minStack)
//     }
// }

// const stack = new MinStack()
// stack.push(1)
// stack.push(0)
// stack.push(-2)
// stack.push(3)
// stack.push(4)

// console.log(stack.getMin())
// 空间换时间 - 优化版

class MinStack {
    constructor() {
        // 主栈
        this.stack = []
        // 递减栈, 栈顶就是最小元素
        this.minusStack = []
    }

    // 返回栈顶的元素
    pop() {
        if (this.stack.length === 0) {
            return
        }
        return this.stack[this.stack.length - 1]
    }

    push(num) {
        this.stack.push(num)
        const len = this.minusStack.length
        if (len > 0) {
            // 获取栈顶元素
            const top = this.minusStack[len - 1]
            if (num < top) {
                this.minusStack.push(num)
            }
        } else {
            this.minusStack.push(num)
        }
    }

    // 删除栈顶的元素, 并返回
    top() {
        const top = this.stack.pop()
        const len = this.minusStack.length
        if (len > 0 && this.minusStack[len - 1] === top) {
            this.minusStack.pop()
        }

        return top
    }

    getMin() {
        return this.minusStack[this.minusStack.length - 1]
    }
}

const stack = new MinStack()
stack.push(1)
stack.push(0)
stack.push(-2)
stack.push(3)
stack.push(4)

console.log(stack.getMin())
