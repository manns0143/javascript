function User(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
    this.greeting = function() {
        return `hello ${this.name}`
    }

    // return this --> implicit return 
}

// const userOne = User("jack", 18, "male")
// const userTwo = User("rose", 22, "female")
// console.log(userOne)
// console.log(userTwo)

const userOne = new User("jack", 18, "male")
const userTwo = new User("rose", 22, "female")
console.log(userOne)
console.log(userTwo)
// console.log(userOne.greeting())
// console.log(userTwo.greeting())