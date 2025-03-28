const id = 143
// id = 2 --> error: Assignment to constant variable.

let name = "ted"
var email = "t@g.com" // var is not recommended
place = "ohio"

console.log(id, name, email, place)

name = "marshall"
email = "m@g.com"
place = "minnesota"

console.table([id, name, email, place])

let pincode;
console.log(pincode) // undefined;

// hoisting in javascript
// console.log(a) --> error
let a
console.log(a) // --> undefined
a = 10

console.log(b) // --> undefined
var b = 20

greet1() // --> prints hello world
function greet1() {
    console.log("hello world1")
}
// greet2() --> error
var greet2 = function() {
    console.log("hello world2")
}