// 在一个有序数组中，查找出第一个大于 9 的数字，假设一定存在。例如，arr = { -1, 3, 3, 7, 10, 14, 14 }; 则返回 10。
const arr = [-1, 3, 3, 7, 10, 14, 14]
function mainx(arr, num) {
    let res = 0
    let middle = 0
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        middle = (high + low) / 2
        // 边界条件
        if (arr[middle] > num && (middle === 0 || arr[middle - 1] <= num)) {
            res = arr[middle]
            break
        } else if (arr[middle] > num) {
            // 在 low - middle 之间
            high = middle - 1
        } else {
            // 在middle - high 之间
            low = middle + 1
        }
    }
    return res
}

console.log(mainx(arr, 9))
