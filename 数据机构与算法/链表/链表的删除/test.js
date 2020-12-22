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
    let cur = head
    while (cur !== null && cur.next !== null) {
        if (cur.value === cur.next.value) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
}

console.log(deleteDuplicates(nodeList))
