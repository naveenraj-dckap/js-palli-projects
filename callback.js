
// function callback (result) {
//     return result*100
// }

function add (a, b, callback) {
    let sum = a+b
    let temp = callback(sum)

    console.log("callback result >>", temp)

    return sum
}

// function parentCallback() {
//
//     let multipleBy = 100
//
//     return function callback (result) {
//         return result*multipleBy
//     }
// }

//const result = add(16, 4, callback)
const result = add(16, 4, function (result) {
    return result*100
})

console.log("add result >>", result)