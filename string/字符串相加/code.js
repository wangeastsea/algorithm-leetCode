/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    const num1Arr = num1.split('').reverse()
    const num2Arr = num2.split('').reverse()
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < num1Arr.length; i++) {
        if (!i) {
            sum1 += parseInt(num1Arr[i])
        } else {
            sum1 += parseInt(num1Arr[i]) * Math.pow(10, i)
        }
    }
    for (let i = 0; i < num2Arr.length; i++) {
        if (!i) {
            sum2 += parseInt(num2Arr[i])
        } else {
            sum2 += parseInt(num2Arr[i]) * Math.pow(10, i)
        }
    }
    const total = sum1 + sum2
    return total + ''
}

// var addStrings = function (num1, num2) {
//     const num1Arr = num1.split('').reverse()
//     const num2Arr = num2.split('').reverse()
//     const minL = Math.min(num1Arr.length, num2Arr.length)
//     const maxL = Math.max(num1Arr.length, num2Arr.length)
//     const res = []
//     for (let i = 0; i < minL; i++) {
//         let num
//         if (i > 0 && res[i]) {
//             num = parseInt(num1Arr[i]) + parseInt(num2Arr[i]) + parseInt(res[i])
//         } else {
//             num = parseInt(num1Arr[i]) + parseInt(num2Arr[i])
//         }
//         if (num >= 10) {
//             res.push(num - 10)
//             res.push(1)
//         } else {
//             res.length > 0 ? res.splice(i, 1, num) : res.push(num)
//         }
//     }
//     if (res[minL - 1] === 0) {
//         if (minL !== maxL) {
//             num1Arr.length === minL
//                 ? res.splice(
//                       maxL - 1,
//                       1,
//                       parseInt(res[maxL - 1]) + parseInt(num2Arr[maxL - 1])
//                   )
//                 : res.splice(
//                       maxL - 1,
//                       1,
//                       parseInt(res[maxL - 1]) + parseInt(num1Arr[maxL - 1])
//                   )
//         }
//     } else {
//         if (minL !== maxL) {
//             num1Arr.length === minL
//                 ? res.push(num2Arr[maxL - 1])
//                 : res.push(num1Arr[maxL - 1])
//         }
//     }
//     return res.reverse().join('')
// }

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 1
var addStrings = function (num1, num2) {
    // 数组的两两元素相加得到total，如果total大于10的话，就往下一位进total-10
    let res = ''
    let carry = 0
    let i = num1.length - 1
    let j = num2.length - 1
    while (i >= 0 || j >= 0) {
        let temp = Number(num1[i]) + Number(num2[j]) + carry
        if (i < 0) {
            temp = Number(num2[j]) + carry
            i = 0
        }
        if (j < 0) {
            temp = Number(num1[i]) + carry
            j = 0
        }
        // 从后往前记录数组的两两元素相加得到total，如果total大于10的话，下一次计算需要进1
        carry = temp >= 10 ? 1 : 0
        // 数组的两两元素相加得到total，如果total大于10的话，当前位就保留total-10(temp % 10)
        res = (temp % 10) + res
        i--
        j--
    }
    return carry > 0 ? `${carry}${res}` : `${res}`
}

// 2
// const addStrings = (num1, num2) => {
//     const arr = []
//     let carry = 0
//     const len = num1.length > num2.length ? num1.length : num2.length
//     while (num1.length < len) {
//         num1 = '0' + num1
//     } // 0 对齐
//     while (num2.length < len) {
//         num2 = '0' + num2
//     }
//     for (let i = len - 1; i >= 0; i--) {
//         const sum = Number(num1[i]) + Number(num2[i]) + carry
//         if (sum >= 10) {
//             arr.push(sum % 10)
//             carry = 1
//         } else {
//             carry = 0
//             arr.push(sum)
//         }
//     }
//     return carry === 0 ? arr.reverse().join('') : carry + arr.reverse().join('')
// }
console.log(addStrings('99', '9'))
// console.log(9333852702227987 + 85731737104263)

// console.log(addStrings('9333852702227987', '85731737104263'))
