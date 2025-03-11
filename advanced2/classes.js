// class based
class User1 {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    changeUsername() {
        return `${this.username.toLowerCase()}`
    }
}

const user1 = new User1("Adam", "adam@guy.com", "password")
console.log(user1)
console.log(user1.changeUsername())

// function based
function User2(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User2.prototype.changeUsername = function () {
    return `${this.username.toLowerCase()}`
}

const user2 = new User2("Eve", "eve@girl.com", "password")
console.log(user2)
console.log(user2.changeUsername())

// inheritance
class User {
    constructor(username) {
        this.username = username
    }

    printUsername() {
        return `username is: ${this.username}`
    }

    // generateId() {
    //     const id =  Math.floor((Math.random() * 10) + 1)
    //     return id
    // }

    static generateId() {
        const id =  Math.floor((Math.random() * 10) + 1)
        return id
    }
}

class Admin extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    printAdminName() {
        return `admin name is: ${this.username}`
    }
}

const admin1 = new Admin("director", "dir@google.com", "1234")
console.log(admin1)
console.log(admin1.printAdminName())
console.log(admin1.printUsername())
const user3 = new User("ordinary user")
console.log(user3)
console.log(user3.printUsername())
// console.log(user3.printAdminName()) --> error
console.log(user3 instanceof User)
console.log(user3 instanceof Admin)
console.log(admin1 instanceof User)
console.log(admin1 instanceof Admin)
// console.log(user3.generateId()) --> error
// console.log(admin1.generateId()) --> error