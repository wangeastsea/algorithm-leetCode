> https://juejin.im/book/5cb42609f265da035f6fcb65/section/5e5b4698f265da5749474beb


> 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。


```
输入: 1->2->3->3->4->4->5
输出: 1->2->5
示例 2:
输入: 1->1->1->2->3
输出: 2->3
```
```
const nodeList = {
    value: 1,
    next: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 3,
                    next: null,
                },
            },
        },
    },
}
```
```
const deleteDuplicates = function (head) {
    if (!head || !head.next) {
        return head
    }
    const dummy = new ListNode()
    dummy.next = head
    let cur = dummy
    while (cur.next && cur.next.next) {
        if (cur.next.value === cur.next.next.value) {
            const value = cur.next.value
            while (cur.next && cur.next.value === value) {
                cur.next = cur.next.next
            }
        } else {
            cur = cur.next
        }
    }
    return dummy.next
}

```