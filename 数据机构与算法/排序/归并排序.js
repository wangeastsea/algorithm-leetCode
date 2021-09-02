function mergeSort(arr) {
    const len = arr.length
    if (arr.length <= 1) {
        return arr
    }
    const mid = Math.floor(len / 2)
    const leftArr = mergeSort(arr.slice(0, mid))
    const rightArr = mergeSort(arr.slice(mid, len))
    arr = merge(leftArr, rightArr)
    return arr
}

function merge(arr1, arr2) {
    let i = 0
    let j = 0
    const res = []
    const len1 = arr1.length
    const len2 = arr2.length
    while (i < len1 && j < len2) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }
    if (i < len1) {
        return res.concat(arr1.slice(i))
    } else {
        return res.concat(arr2.slice(j))
    }
}
const arr1 = [1, 2, 3]
const arr2 = [100, 200, 300]
console.log(merge(arr1, arr2))

console.log(mergeSort([4, 3, 2, 1]))
// O(nlog(n))
