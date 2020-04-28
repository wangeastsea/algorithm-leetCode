/**
 * @param {string} s
 * @return {boolean}
 */

// 思路： 准备2个数组，作为栈a和栈b， 为了简单理解，我们统一假设下标为0的设置为
// 栈底，最后一个元素为栈顶。然后栈a栈顶元素跟下一个元素进行比较，如果匹配，就跟下一个元素两个出栈，弹出。
// 如果不匹配，我们准备第二个栈b，用于存放不匹配的元素压栈底，然后继续比较栈a的栈顶元素跟下一个元素，
// 如果不匹配，就跟栈b的栈顶元素匹配，如果匹配就栈a和栈b的栈顶元素都出栈，如果不匹配继续压入栈b,持续以上过程，直到
// 栈a为空，说明全部匹配，如果不为空，则有不匹配的

var isValid = function (s) {
    const Map = {
        '(': '1',
        ')': '1',
        '{': '2',
        '}': '2',
        '[': '3',
        ']': '3',
    }
    const a = s.split('')
    const b = []
    let l = a.length - 1
    while (l >= 0) {
        if (Map[a[l]] === Map[a[l - 1]] && a[l] !== a[l - 1]) {
            a.splice(l - 1, 2)
            l -= 2
        } else {
            // 如果匹配，栈a和栈b的栈顶元素都出栈
            if (
                Map[a[l]] === Map[b[b.length - 1]] &&
                a[l] !== b[b.length - 1]
            ) {
                a.pop()
                b.pop()
                l--
            } else {
                b.push(a[l])
                a.pop()
                l--
            }
        }
    }
    return b.length === 0
}

console.log(isValid(''))
