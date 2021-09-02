const arr = [2, 3, 4, 5, 6, 78, 8, 834, 11, 2]

function selectSort(arr) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let min = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            ;[arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr
}

console.log(selectSort(arr))
