// 背景思路介绍：
// `大写字符` A-Z 对应的是 65 - 90
// `小写字符` a-z 对应的是 97 - 122
// A 与 a 的数值位差为 32
// 使用 char.charCodeAt() 拿到字符 char 对应的数值 strNum
// 使用 String.fromCharCode(strNum + 数值位差) 拿到对应的 `小写字符`

// 实现
function ToLowerCase(value) {
    let lowerstr = ''
    const arr = value.split('')
    arr.forEach((item) => {
        // 使用 char.charCodeAt() 拿到字符 char 对应的数值 strNum
        const strNum = item.charCodeAt()
        if (strNum >= 65 && strNum <= 90) {
            // 判断是否 65 - 90 之间
            lowerstr += String.fromCharCode(strNum + 32)
        } else {
            lowerstr += item
        }
    })
    return lowerstr
}

console.log(ToLowerCase('Where'))
console.log(ToLowerCase('WHO AM I'))
