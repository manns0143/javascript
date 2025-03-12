class User1 {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    get name() {
        return `name is: ${this._name}`
    }

    set name(value) {
        this._name = value.toUpperCase()
    }
}

const user1 = new User1("john doe", "jd@g.com")
console.log(user1)
console.log(user1.name)

function User2(name, email) {
    this._name = name
    this._email = email

    Object.defineProperty(this, 'name', {
        get: function() {
            return `name is: ${this._name.toUpperCase()}`
        },
        set: function(value) {
            this._name = value
        }
    })
}

const user2 = new User2("jane doe", "jd@g.com")
console.log(user2)
console.log(user2.name)

const User3 = {
    _name: 'jack doe',
    _email: 'jd@g.com',
    get name() {
        return `name is: ${this._name.toUpperCase()}` 
    },
    set name(value) {
        this._name = value
    }
}

const user3 = Object.create(User3)
console.log(user3)
console.log(user3.name)