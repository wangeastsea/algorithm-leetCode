function ListNode(value) {
    this.value = value
    this.next = null
}
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
function deleteDuplicates(head) {
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

console.log('e')
console.log('nodeList', deleteDuplicates(nodeList))
