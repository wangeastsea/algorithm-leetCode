function customQuickSort(arr, low, high) {
    let i, j, t
    if (low >= high) {
        return
    }
    i = low
    j = high
    const temp = arr[low]
    while (i < j) {
        // 先看右边，依次往左递减
        while (temp <= arr[j] && i < j) {
            j--
        }
        // 再看左边，依次往右递增
        while (temp >= arr[i] && i < j) {
            i++
        }
        t = arr[j]
        arr[j] = arr[i]
        arr[i] = t
    }
    arr[low] = arr[i]
    arr[i] = temp
    // 递归调用左半数组
    customQuickSort(arr, low, j - 1)
    // 递归调用右半数组
    customQuickSort(arr, j + 1, high)
}

const arr = [3, 4, 56, 1, 2, 8, 4]
customQuickSort(arr, 0, 7)
console.log(arr)
