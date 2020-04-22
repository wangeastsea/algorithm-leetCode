/**
 * @param {string} address
 * @return {string}
 */

// one
// var defangIPaddr = function (address) {
//     return address.replace(/\./g, ($1) => {
//         return `[${$1}]`
//     })
// }

// two
// var defangIPaddr = function (address) {
//     return address.replace(/\./g, '[.]')
// }

// three
var defangIPaddr = function (address) {
    return address.split('.').join('[.]')
}

console.log(defangIPaddr('1.1.1.1'))
console.log(defangIPaddr('255.100.50.0'))
