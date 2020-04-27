/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
    const Obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let i = 0
    let sum = 0
    while (i < s.length) {
        if (s[i] === 'I') {
            const flag = s[i + 1]
            if (flag === 'V') {
                sum += 4
                i += 2
            } else if (flag === 'X') {
                sum += 9
                i += 2
            } else {
                sum += Obj[s[i]]
                i++
            }
        }
        if (s[i] === 'X') {
            const flag = s[i + 1]
            if (flag === 'L') {
                sum += 40
                i += 2
            } else if (flag === 'C') {
                sum += 90
                i += 2
            } else {
                sum += Obj[s[i]]
                i++
            }
        }
        if (s[i] === 'C') {
            const flag = s[i + 1]
            if (flag === 'D') {
                sum += 400
                i += 2
            } else if (flag === 'M') {
                sum += 900
                i += 2
            } else {
                sum += Obj[s[i]]
                i++
            }
        }
        if (!['I', 'X', 'C', undefined].includes(s[i])) {
            sum += Obj[s[i]]
            i++
        }
    }
    return sum
}

console.log(romanToInt('LVIII'))
