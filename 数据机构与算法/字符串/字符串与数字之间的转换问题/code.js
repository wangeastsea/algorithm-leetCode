function myAtoi(numStr) {
    const reg = /\s*([-\+]?[0-9]*).*/
    const max = Math.pow(2, 31) - 1
    const min = -max - 1
    console.log(numStr.match(reg))
    const res = Number(numStr.match(reg)[1])
    if (isNaN(res)) {
        return 0
    } else {
        if (res > max) {
            return max
        } else if (res < min) {
            return min
        } else {
            return res
        }
    }
}
console.log('e', myAtoi('12334asdfh'))
