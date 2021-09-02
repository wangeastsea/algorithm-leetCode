function partition(arr, left, right) {
    const pivotValue = arr[Math.floor(left + (right - left) / 2)]
    let i = left
    let j = right
    while (i <= j) {
        while (arr[i] < pivotValue) {
            i++
        }
        while (arr[j] > pivotValue) {
            j--
        }
        if (i <= j) {
            swap(arr, i, j)
            i++
            j--
        }
    }
    return i
}

function swap(arr, i, j) {
    ;[arr[j], arr[i]] = [arr[i], arr[j]]
}

funciton quickSort(arr, left=0, right = arr.length-1) {
    if (arr.length>0) {
        const lineIndex = partition(arr, left, right)
        if (left < lineIndex -1) {
            quickSort(arr, left, lineIndex-1)
        }
        if (right > lineIndex) {
            quickSort(arr, lineIndex, right)
        }
    }
    return arr
}

// 空间复杂度较高
var quickSort1 = function(arr) { 　　
    if (arr.length <= 1) { return arr; } 　　
    var pivotIndex = Math.floor(arr.length / 2); 　　
    var pivot = arr.splice(pivotIndex, 1)[0]; 　　
    var left = []; 　　
    var right = []; 　　
    for (var i = 0; i < arr.length; i++) { 　　　　
        if (arr[i] < pivot) { 　　　　　　
            left.push(arr[i]); 　　　　
        } else { 　　　
            right.push(arr[i]); 　　　　
        } 　　
    } 　　
    return quickSort1(left).concat([pivot], quickSort1(right)); 
};