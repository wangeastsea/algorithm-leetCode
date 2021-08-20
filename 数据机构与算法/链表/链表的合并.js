/**
 * 真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。
 * 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4
 * 理链表的本质，是处理链表结点之间的指针关系。
 */

class ListNode {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

const l1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 4,
            next: null,
        },
    },
}

const l2 = {
    value: 1,
    next: {
        value: 3,
        next: {
            value: 4,
            next: null,
        },
    },
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
    const head = new ListNode()
    let cur = head
    while (l1 && l2) {
        if (l1.value <= l2.value) {
            cur.next = l1
            l1 = l1.next
        } else {
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }
    if (l1) {
        cur.next = l1
    }
    if (l2) {
        cur.next = l2
    }
    return head.next
}
const mergeList = mergeTwoLists(l1, l2)
console.log(mergeList)
