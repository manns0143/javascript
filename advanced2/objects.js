function createProduct(name, price) {
    this.name = name
    this.price = price
}

createProduct.prototype.printInfo = function() {
    console.log(`the product is ${this.name} and its price is ${this.price}`)
}

const prod1 = new createProduct("coffee", 150)
const prod2 = new createProduct("tea", 20)
prod1.printInfo()
prod2.printInfo()

const arr = [1, 2, 3, 4, 5]
const obj = {
    name: "mann"
}
const str1 = "   hello "
const str2 = "  world     "

Object.prototype.sayMyName1 = function() {
    console.log('this method is present in all objects and everything is an object in javascript')
}

Array.prototype.sayMyName2 = function() {
    console.log('this method is present only in all arrays')
}

String.prototype.trueLength = function() {
    console.log(this)
    console.log(`true length is: ${this.trim().length}`)
}

arr.sayMyName1()
obj.sayMyName1()
arr.sayMyName2()
// obj.sayMyName2()
str1.trueLength()
str2.trueLength()
"okay".trueLength()

// prototypal inheritance
const user = {
    name: "sheldon"
}
const field = {
    domain: "theoretical physics"
}

// field.__proto__ = user --> old syntax
Object.setPrototypeOf(field, user) // --> modern syntax
console.log(field.name)