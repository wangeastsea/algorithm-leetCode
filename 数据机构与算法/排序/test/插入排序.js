const arr = [2, 3, 4, 5, 6, 78, 8, 834, 11, 2]
function insertSort(arr) {
    const len = arr.length
    let temp
    for (let i = 1; i < len; i++) {
        let j = i
        temp = arr[i]
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = temp
    }
    return arr
}

console.log(insertSort(arr))
