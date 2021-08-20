/**
 *
 * 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 *  输入: 1->1->2
    输出: 1->2
    示例 2:
    输入: 1->1->2->3->3
    输出: 1->2->3
 *
 */
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const l = {
    value: 1,
    next: {
        value: 1,
        next: {
            value: 4,
            next: null,
        },
    },
}

function deleteDuplicates(l) {
    // 把 cur 当作移动的指针来看
    // 把l永远当作头节点
    let cur = l
    while (cur !== null && cur.next) {
        if (cur.value === cur.next.value) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return l
}

console.log(deleteDuplicates(l))

/**
 * 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
 *  输入: 1->2->3->3->4->4->5
    输出: 1->2->5
    示例 2:
    输入: 1->1->1->2->3
    输出: 2->3
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates2 = function (head) {
    // 极端情况：0个或1个结点，则不会重复，直接返回
    if (!head || !head.next) {
        return head
    }
    const dummy = new ListNode()
    dummy.next = head
    let cur = dummy
    while (cur.next && cur.next.next) {
        if (cur.next.value === cur.next.next.value) {
            // 若值重复，则记下这个值
            const val = cur.next.value
            while (cur.next && cur.next.value === val) {
                // 若有，则删除
                cur.next = cur.next.next
            }
        } else {
            // 若不重复，则正常遍历
            cur = cur.next
        }
    }
    return dummy.next
}
