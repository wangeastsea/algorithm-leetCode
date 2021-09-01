/**
 * 我们将数组中的数据分为两个区间，已排序区间和未排序区间。
 * 初始已排序区间只有一个元素，就是数组的第一个元素。
 * 插入算法的核心思想是取未排序区间中的元素，在已排序区间中找到合适的插入位置将其插入，并保证已排序区间数据一直有序。
 * 重复这个过程，直到未排序区间中元素为空，算法结束。
 * https://time.geekbang.org/column/article/41802
 */

/**
 * 插入排序也包含两种操作，一种是元素的比较，一种是元素的移动。
 * 当我们需要将一个数据 a 插入到已排序区间时，需要拿 a 与已排序区间的元素依次比较大小，找到合适的插入位置。
 * 找到插入点之后，我们还需要将插入点之后的元素顺序往后移动一位，这样才能腾出位置给元素 a 插入。
 */
const arr = [1, 3, 120, 20, 2, 10, 2, 5]
function insertSort(arr) {
    const length = arr.length
    if (length === 1) return
    for (let i = 1; i < length; i++) {
        const num = arr[i]
        let j = i - 1
        for (; j >= 0; j--) {
            if (arr[j] > num) {
                arr[j + 1] = arr[j]
            } else {
                break
            }
        }
        arr[j + 1] = num
    }
}

insertSort(arr)

// console.log(arr)

function betterInsertSort(arr) {
    const len = arr.length
    let temp
    for (let i = 1; i < len; i++) {
        temp = arr[i]
        let j = i
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = temp
    }
    return arr
}

console.log(betterInsertSort(arr))
