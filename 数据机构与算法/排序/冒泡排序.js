const arr = [3, 4, 20, 2, 2, 16, 12, 10, 7, 4, 5, 6]
function BubbleSort(arr) {
    const num = arr.length
    // 控制轮数，执行 num-1 轮比较就结束了
    for (let i = 0; i < num; i++) {
        // 控制比较
        for (let j = 0; j < num - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}

BubbleSort(arr)
console.log(arr)
