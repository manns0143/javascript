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
