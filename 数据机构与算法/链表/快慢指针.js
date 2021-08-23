/**
 *  真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点
 *  给定一个链表: 1->2->3->4->5, 和 n = 2.
    当删除了倒数第二个结点后，链表变为 1->2->3->5.
 *  给定的 n 保证是有效的。
 */
class NodeList {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
const list = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                },
            },
        },
    },
}

const removeNthFromEnd = function (list, n) {
    const dummy = new NodeList(null)
    // dummy 永远指向头节点
    dummy.next = list
    let slow = dummy
    let fast = dummy
    // 定位快指针的位置
    while (n > 0) {
        fast = fast.next
        n--
    }
    // 同步后移
    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }
    // 删除
    // fast， dummy, slow 都是一条链上的蚂蚱
    slow.next = slow.next.next
    return dummy.next
}

// console.log(removeNthFromEnd(list, 2))

// 多指针法——链表的反转
/**
 * 定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
 * 
 *  输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL
 */

function reverseList(list) {
    let pre = new NodeList(null)
    let cur = list
    let next = list.next
    while (cur !== null) {
        cur.next = pre
        pre = cur
        cur = next
        if (next) {
            next = next.next
        }
    }
    return list
}
console.log(reverseList(list))

//
// 局部反转一个链表
/**
 *  反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 *  1 ≤ m ≤ n ≤ 链表长度。
 *  输入: 1->2->3->4->5->NULL, m = 2, n = 4
    输出: 1->4->3->2->5->NULL
 */
const reverseBetween = function (head, m, n) {
    let pre, cur
    const dummy = new NodeList(null)
    dummy.next = head
    const p = dummy
    for (let i = 0; i < m - 1; i++) {
        pre = p.next
    }
    // 保存关键节点
    const leftHead = p
    // 保存关键节点
    const start = leftHead.next
    pre = start
    cur = pre.next
    for (let i = m; i < n; i++) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    leftHead.next = pre
    start.next = cur
    return dummy.next
}
