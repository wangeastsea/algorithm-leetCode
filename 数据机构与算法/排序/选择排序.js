const arr = [5, 3, 2, 4, 1]
function selectSort(arr) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let min = arr[i]
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < min) {
                min = arr[j]
                ;[arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}
// console.log(selectSort(arr))
const arr1 = [1, 2, 3, 4, 5, 3, 3, 9, 7, 8, 8, 11, 10]
function betterSelectSort(arr) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let min = arr[i]
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < min) {
                min = arr[j]
                ;[arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}

console.log(betterSelectSort(arr1))
