const user = {
    name: "ted",
    age: 30,
    greeting: function () {
        console.log(this)
        return `welcome ${ this.name }`
    }
}

const user2 = {
    name: "barney",
    age: 32,
    greeting: user.greeting
}

console.log(user.greeting())
user.name = "marshall"
console.log(user.greeting())
console.log(user2.greeting())

console.log(this)

function func1 () {
    console.log(this)
}
func1()

const func2 = () => {
    console.log(this)
}
func2()

const addOne = (num) => {
    return num + 1 // explicit return
}

const addTwo = (num) => (
    num + 2 // implicit return
)

console.log(addOne(5))
console.log(addTwo(5));

// immediately invoked function expressions (IIFE)

( function printName (name) {
    console.log(`name is ${ name }`)
})("lily");

( (name) => {
    console.log(`name is ${ name }`)
})("robin");