function addTwoNums1 (num1, num2) {
    console.log(num1 + num2)
}

function addTwoNums2 (num1, num2) {
    return num1 + num2
}

const res1 = addTwoNums1(2, 3)
const res2 = addTwoNums2(5, 5)
console.log(res1) // undefined
console.log(res2) // 10

function printUsername1 (name) {
    return `${name} is the username`
}
function printUsername2 (name) {
    if (!name) { // if (username === undefined)
        return "username is required"
    }
    return `${name} is the username`
}
function printUsername3 (name = "ted") {
    return `${name} is the username`
}

console.log(printUsername1("marshall")) // output: marshall is the username
console.log(printUsername1()) // output: undefined is the username
console.log(printUsername2("robin")) // output: robin is the username
console.log(printUsername2()) // output: username is required
console.log(printUsername3("barney")) // output: barney is the username
console.log(printUsername3()) // output: ted is the username

function numsArray (...num) { // rest operator/spread operator
    return num
}
console.log(numsArray(1, 2, 3, 4, 5)) // [1, 2, 3, 4, 5]

function printInfo (user) {
    console.log(`my name is ${ user.name } and i am ${ user.age } years old`)
}
printInfo({ name: "ted", age: 28 }) // my name is ted and i am 28 years old

console.log(addOne(10)) // output: 11
function addOne (num) {
    return num + 1
}
console.log(addOne(20)) // output: 21

// console.log(addTwo(30)) // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num + 2
}
console.log(addTwo(40)) // output: 42

if (true) {
    let a = "chandler"
    const b = "joey"
    var c = "ross"
}
// console.log(a) // ReferenceError: a is not defined
// console.log(b) // ReferenceError: b is not defined
console.log(c) // output: ross