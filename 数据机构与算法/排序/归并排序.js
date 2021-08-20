const arr = [11, 8, 3, 9, 7, 1, 2, 5, 90]

// 主要思想是二分发
function mergeSort(arr) {
    const len = arr.length - 1
    const temp = []
    mergeFn(arr, temp, 0, len)
}
function mergeFn(arr, temp, start, end) {
    if (start < end) {
        const mid = Math.floor((start + end) / 2)
        mergeFn(arr, temp, start, mid)
        mergeFn(arr, temp, mid + 1, end)
        mergeHandle(arr, temp, start, mid, end)
    }
}
function mergeHandle(arr, temp, left, mid, right) {
    let p1 = left
    let p2 = mid + 1
    let k = left
    while ((p1 <= mid) & (p2 <= mid)) {
        if (arr[p1] <= arr[p2]) {
            temp[k++] = arr[p1++]
        } else {
            temp[k++] = arr[p2++]
        }
    }
    while (p1 <= mid) {
        temp[k++] = arr[p1++]
    }
    while (p2 <= right) {
        temp[k++] = arr[p2++]
    }
    for (let i = left; i <= right; i++) {
        arr[i] = temp[i]
    }
}

mergeSort(arr)
console.log(arr)
// 缺点：创建许多额外的内存空间
// function mergeSort(arr) {
//     const len = arr.length
//     if (len < 2) {
//         return arr
//     }
//     const middle = Math.floor(len / 2)

//     const left = arr.slice(0, middle)

//     const right = arr.slice(middle)
//     count++
//     printIndent(count, `left ===${left}`, `right === ${right}`)
//     return merge(mergeSort(left), mergeSort(right))
// }
// function merge(left, right) {
//     const result = []
//     while (left.length > 0 && right.length > 0) {
//         if (left[0] <= right[0]) {
//             result.push(left.shift())
//         } else {
//             result.push(right.shift())
//         }
//     }
//     while (left.length) result.push(left.shift())
//     while (right.length) result.push(right.shift())
//     printIndent(--count, `result ===${result}`, '-')
//     return result
// }

// console.log(mergeSort(arr))
