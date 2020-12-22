> 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。

> 示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

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

1-> 1 -> 2-> 3-> 3 -> null
3-> 3-> 2-> 1-> 1 -> null
```
