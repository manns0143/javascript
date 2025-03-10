const user = {
    name: "ted",
    age: 25,
    isActive: false,
    email: "ted@google.com"
}

console.log(user);
console.log(user.name);
console.log(user["name"]);

user.tagline = function () {
    console.log(`my name is ${this.name} and i am ${this.age} years old`);
}

console.log(user.tagline) // prints reference to the function
user.tagline() // prints the actual function
console.log(user.tagline()) // prints the function and the return value of the function

const anotherUser = {
    name: "marshall",
    age: 26,
    tagline: user.tagline
}
anotherUser.tagline()

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj3 = {
    5: "e",
    6: "f"
}

// const obj4 = { obj1, obj2, obj3 }
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = { ...obj1, ...obj2, ...obj3 }
console.log(obj4)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

// console.log(user.name)
const { name: userName } = user
console.log(userName)

const userInfo = {
    name: "lily",
    gender: "female",
    age: 25,
    printThis: function() {
        console.log(this) // 'this' keyword provides context
    }
}
userInfo.printThis()