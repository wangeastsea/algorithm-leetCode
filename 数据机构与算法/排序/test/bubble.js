const arr = [2, 3, 4, 5, 6, 78, 8, 834, 11, 2]
function bubbleSort(arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        // 哪一轮 有序了，就直接退出了
        let flag = false
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                flag = true
            }
        }
        if (flag === false) {
            return arr
        }
    }
    return arr
}

console.log(bubbleSort(arr))
